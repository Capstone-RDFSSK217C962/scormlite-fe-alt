import api from "../../../services/api";
import TokenService from "../../../services/token.service";

class AuthService {
    login(username, password) {
        return api
            .post('/auth/signin', {
                username,
                password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    TokenService.setUser(response.data);
                }

                return response.data;
            });
    }

    logout() {
        TokenService.removeUser();
    }

    register(username, firstname, lastname, email, password) {
        return api.post('/auth/signup', {
            username,
            firstname,
            lastname,
            email,
            password,
        });
    }

    getCurrentUser() {
        return TokenService.getUser();
    }
}

export default new AuthService();
