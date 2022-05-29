import React, { lazy, useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import AuthService from '../components/auth/auth.service';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Home from '../components/home/Home';
// import Profile from './components/Profile';
// import BoardUser from './components/BoardUser';
// import BoardModerator from './components/BoardModerator';
// import BoardAdmin from './components/BoardAdmin';

import AllCourses from '../components/all_courses/AllCourses';
import NewCourse from '../components/new_course/NewCourse';
import CourseDetail from '../components/course_detail/CourseDetail';

import EventBus from '../../common/EventBus';

export default function App() {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
            setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
        }

        EventBus.on('logout', () => {
            logOut();
        });

        return () => {
            EventBus.remove('logout');
        };
    }, []);

    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    };

    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={'/'} className="navbar-brand">
					bezKoder
                </Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/home'} className="nav-link">
							Home
                        </Link>
                    </li>

                    {showModeratorBoard && (
                        <li className="nav-item">
                            <Link to={'/mod'} className="nav-link">
								Moderator Board
                            </Link>
                        </li>
                    )}

                    {showAdminBoard && (
                        <li className="nav-item">
                            <Link to={'/admin'} className="nav-link">
								Admin Board
                            </Link>
                        </li>
                    )}

                    {currentUser && (
                        <li className="nav-item">
                            <Link to={'/user'} className="nav-link">
								User
                            </Link>
                        </li>
                    )}
                </div>

                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/profile'} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logOut}>
								LogOut
                            </a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">
								Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link">
								Sign Up
                            </Link>
                        </li>
                    </div>
                )}
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route path="/" component={<Home />} />
                    <Route path="/home" component={<Home />} />
                    <Route path="/login" component={<Login />} />
                    <Route path="/register" component={<Register />} />
                    <Route path="/all-courses" component={<AllCourses />} />
                    <Route path="/new-course" component={<NewCourse />} />
                    <Route path="/course-detail" component={<CourseDetail />} />
                    {/* <Route path="/profile" element={<Profile />} />
					<Route path="/user" element={<BoardUser />} />
					<Route path="/mod" element={<BoardModerator />} />
					<Route path="/admin" element={<BoardAdmin />} /> */}
                </Routes>
            </div>
        </div>
    );
}