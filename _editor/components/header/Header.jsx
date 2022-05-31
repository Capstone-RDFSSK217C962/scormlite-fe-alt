import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EventBus from '../../../common/EventBus';
import AuthService from '../auth/auth.service';
import logo from '../../../dist/images/logo.svg';
import './Header.module.scss';
import { capitalize } from '../../../common/utils';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);

        this.state = {
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        this.setState({ currentUser: currentUser });

        EventBus.on('logout', () => {
            this.logout();
        });
    }

    componentWillUnmount() {
        EventBus.remove('logout');
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

        return (

            <div className="headerContainer">
                <Link to={'/'}>
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <div className="headerWrapper">
                    {currentUser && (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link firstname">
                                    {capitalize(currentUser.username)}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logout}>
										logout
                                </a>
                            </li>
                        </div>
                    )
                    }
                </div>
            </div>
        );
    }
}
