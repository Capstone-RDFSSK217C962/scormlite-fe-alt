import React, { Component } from "react";
import { Link } from "react-router-dom";

import EventBus from "../../../common/EventBus";
import AuthService from "../../../core/services/auth.service";
import logo from "../../../dist/images/logo.svg";
import "./Header.module.scss";
import { capitalize } from "../../../common/utils";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            currentUser: undefined,
            isDropdown: false,
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        this.setState({ currentUser: currentUser });

        EventBus.on("logout", () => {
            this.logout();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logout() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }

    render() {
        const { currentUser } = this.state;
        const { isDropdown } = this.state;

        return (
            <div className="headerContainer">
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <div className="headerWrapper">
                    {currentUser && (
                        <div
                            className="navbar-nav ml-auto"
                            style={{ display: "flex", alignItems: "center" }}
                        >
                            <Link to={"/"} className="nav-link firstname">
                                {capitalize(currentUser.username)}
                            </Link>
                            <button
                                style={{ border: "0", cursor: "pointer", marginLeft: "12px" }}
                                onClick={() => this.setState({ isDropdown: !isDropdown })}
                            >
                                {isDropdown ? (
                                    <div className="chevronUp" />
                                ) : (
                                    <div className="chevronDown" />
                                )}
                            </button>
                            <div
                                style={{
                                    display: isDropdown ? "block" : "none",
                                    position: "absolute",
                                    top: "55px",
                                    backgroundColor: "white",
                                    width: "100px",
                                    padding: "10px",
                                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <a href="/login" style={{ color: "#172E7C" }}className="nav-link" onClick={this.logout}>
                  Keluar
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
