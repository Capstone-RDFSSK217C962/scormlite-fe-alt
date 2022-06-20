import React, { Component } from "react";
import ErrorPage from './ErrorPage';

class NotFound extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <ErrorPage error={{ status: 404, message: 'Page not found' }} />
                </div>
            </div>
        );
    }
}

export default NotFound;
