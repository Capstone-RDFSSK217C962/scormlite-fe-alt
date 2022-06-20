import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import i18n from "i18next";

require("./_visor.scss");

export default class VisorCourseDetail extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.visorVisible || nextProps.visorVisible;
    }

    render() {
        return (
            <iframe
                id="visor_iframe"
                ref={(el) => {
                    if (el !== null && this.props.visorVisible) {
                        el.contentWindow.document.open();
                        el.contentWindow.document.write(
                            Ediphy.Visor.exportPage({ ...this.props.state, preview: true })
                        );
                        el.contentWindow.document.close();
                    }
                }}
                style={{ width: "100%", height: "500px", border: 0, marginTop: "16px" }}
                allowFullScreen
                frameBorder="0"
            />
        );
    }
}

VisorCourseDetail.propTypes = {
    visorVisible: PropTypes.bool,
    onVisibilityToggled: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
};
