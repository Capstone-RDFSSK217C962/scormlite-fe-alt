import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../common/utils.es6';

const PrivateRoute = ({ component: Component, ...rest }) =>
{
    return (
        <Route {...rest} render={props => (
            isLoggedIn() ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;
