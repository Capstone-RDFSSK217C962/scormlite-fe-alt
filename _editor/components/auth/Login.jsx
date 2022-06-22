/* eslint-disable consistent-return */
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { withRouter, Redirect, Link } from "react-router-dom";

import AuthService from "./auth.service";

import logo from "../../../dist/images/logo.svg";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
        This field is required!
            </div>
        );
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
            redirect: null,
            currentUser: { username: "" },
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser) {
            this.setState({ redirect: "/" });
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            isLoading: true,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    // eslint-disable-next-line react/prop-types
                    this.props.history.push('/');
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

                    this.setState({
                        isLoading: false,
                        message: resMessage,
                    });
                }
            );
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }

        return (
            <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
                <div
                    className="col-md-4"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <img className="logo" src={logo} alt="logo" style={{ height: "7rem", marginBottom: "3.5em" }}/>
                    <div className="card card-container">
                        <Form
                            onSubmit={this.handleLogin}
                            ref={(c) => {
                                this.form = c;
                            }}
                        >
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChangeUsername}
                                    validations={[required]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required]}
                                />
                            </div>

                            <div className="form-group" style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ backgroundColor: "#3D5AFE", padding: "10px", borderRadius: "10px", borderColor: "#3D5AFE", width: "20%" }}
                                    className="btn btn-primary btn-block w-50"
                                    disabled={this.state.loading}
                                >
                                    {this.state.loading && (
                                        <span className="spinner-border spinner-border-sm" />
                                    )}
                                    <span>Masuk</span>
                                </button>
                            </div>

                            {this.state.message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {this.state.message}
                                    </div>
                                </div>
                            )}
                            <CheckButton
                                style={{ display: "none" }}
                                ref={(c) => {
                                    this.checkBtn = c;
                                }}
                            />
                        </Form>
                        <div className="navbar-nav ml-auto" style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "10px" }}>
              Belum punya akun?
                            <Link to={"/register"} className="nav-link" style={{ marginLeft: "5px" }}>
                  Daftar
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
