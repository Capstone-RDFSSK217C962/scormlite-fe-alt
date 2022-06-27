import axios from "axios";
import 'regenerator-runtime/runtime';

import TokenService from "./token.service";
import authService from "./auth.service";

const instance = axios.create({
    baseURL: "https://scormlite-be.herokuapp.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = TokenService.getLocalAccessToken();
        if (token) {
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async(err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== "/auth/signin" && err.response) {

        // Access token is expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const res = await instance.post("/auth/refreshtoken", {
                        refreshToken: TokenService.getLocalRefreshToken(),
                    });

                    const { accessToken } = res.data;
                    TokenService.updateLocalAccessToken(accessToken);

                    return instance(originalConfig);
                } catch (_error) {
                    if (_error.response.status === 403) {
                        authService.logout();
                        window.location.href = '/login';
                    }

                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
);

export default instance;
