import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import DevTools from './DevTools';
import GlobalState from '../../reducers/reducers';
import EditorApp from './EditorApp';
import Ediphy from '../../core/editor/main';
import Home from '../components/home/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import AllCourses from '../components/all_courses/AllCourses';
import EditCourse from '../components/edit_course/EditCourse';
import CreateCourse from '../components/create_course/CreateCourse';
import CourseDetail from '../components/course_detail/CourseDetail';
import Header from '../components/header/Header';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import EditorRoute from './editorRoute';
import DashboardNavbar from '../components/dashboard_navbar/DashboardNavbar';

export default class ReduxProvider extends Component {
    constructor(props) {
        super(props);
        this.initialState = Ediphy.InitialState;
        this.store = this.configureStore();
        this.history = createBrowserHistory();
        this.allowedPaths = ['/courses', '/'];
        this.firstPath = /^\/([^\/]*)/;
    }

    render() {

        return (
            <Provider store={this.store}>
                <Router>
                    <Route
                        render={({ location }) =>
                            this.allowedPaths.includes(location.pathname.match(this.firstPath)[0]) ?
                                <Fragment><Header /><DashboardNavbar /></Fragment> : null
                        }
                    />
                    <Switch>
                        <PrivateRoute exact path={['/', 'home']} component={Home} />
                        <PublicRoute exact path="/login" component={Login} />
                        <PublicRoute exact path="/register" component={Register} />
                        <PrivateRoute exact path="/courses" component={AllCourses} />
                        <PrivateRoute exact path="/courses/create" component={CreateCourse} />
                        <PrivateRoute exact path="/courses/edit/:id" component={EditCourse} />
                        <PrivateRoute exact path="/courses/:id"><CourseDetail store={this.store}/> </PrivateRoute>
                        <EditorRoute exact path="/editor/:id" component={EditorApp} id="app" store={this.store}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }

    configureStore() {
        const store = createStore(
            GlobalState,
            this.initialState,
            compose(applyMiddleware(thunkMiddleware), DevTools.instrument())
        );
        Ediphy.Plugins.loadAll();
        if (module.hot) {
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('../../reducers/reducers', () => {
                const nextRootReducer = require('../../reducers/reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }

        return store;
    }
}
