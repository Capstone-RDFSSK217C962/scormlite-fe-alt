import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import DevTools from "./DevTools";
import GlobalState from "../../reducers/reducers";
import EditorApp from "./EditorApp";
import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import Ediphy from "../../core/editor/main";
import Home from "../components/home/Home";
import NewCourse from "../components/new_course/NewCourse";
export default class ReduxProvider extends Component {
    constructor(props) {
        super(props);
        this.initialState = Ediphy.InitialState;
        this.store = this.configureStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                <Router>
                    {/* <LeftNavbar /> */}
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/new-course">
                            <NewCourse />
                        </Route>
                        <Route path="/editor">
                            <div style={{ height: "100%" }}>
                                <EditorApp id="app" store={this.store} />
                                {process.env.NODE_ENV === "production" ? null : <DevTools />}
                            </div>
                        </Route>
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
            module.hot.accept("../../reducers/reducers", () => {
                const nextRootReducer = require("../../reducers/reducers").default;
                store.replaceReducer(nextRootReducer);
            });
        }

        return store;
    }
}
