import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isLoggedIn } from '../../common/utils.es6';

const EditorRoute = ({ component: Component, id: id, store: store, ...rest }) =>
{
    return (
        <Route {...rest} render={props => (
            isLoggedIn() ?
                <Component {...props} id={id} store={store} />
                : <Redirect to="/login" />
        )} />
    );
};

export default EditorRoute;

EditorRoute.propTypes = {
    component: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
};
