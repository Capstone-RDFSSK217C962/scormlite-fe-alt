import React, { Component } from 'react';
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
import NewCourse from '../components/new_course/NewCourse';
import CourseDetail from '../components/course_detail/CourseDetail';
import Header from '../components/header/Header';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

export default class ReduxProvider extends Component {
    constructor(props) {
        super(props);
        this.initialState = Ediphy.InitialState;
        this.store = this.configureStore();

        this.history = createBrowserHistory();
    }

    render() {
        const history = this.history;

        return (
            <Provider store={this.store}>
                <Router>
                    { history.location.pathname !== '/editor' && (<Header />)}
                    <Switch>
                        <PrivateRoute exact path={['/', 'home']} component={Home} />
                        <PublicRoute exact path="/login" component={Login} />
                        <PublicRoute exact path="/register" component={Register} />
                        <PrivateRoute path="/editor">
                            <div style={{ height: '100%' }}>
                                <EditorApp id="app" store={this.store} />
                                {process.env.NODE_ENV === 'production' ? null : <DevTools />}
                            </div>
                        </PrivateRoute>
                        <PrivateRoute path="/all-courses" component={AllCourses} />
                        <PrivateRoute path="/new-course" component={NewCourse} />
                        <PrivateRoute path="/course-detail" component={CourseDetail} />
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
