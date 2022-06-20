import React, { Component } from "react";
import PropTypes from 'prop-types';

class ErrorPage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <h2>{this.props.error.status}</h2>
                    <h2>{this.props.error.message}</h2>
                </div>
            </div>
        );
    }
}

export default ErrorPage;

ErrorPage.propTypes = {
    error: PropTypes.shape({
        status: PropTypes.number,
        message: PropTypes.string,
    }),
};
