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
    /* if (this.props.state.navItemSelected === 0) {
            return (
                <div />
            );
        }*/

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
                style={{ width: "100%", height: "100%", border: 0 }}
                allowFullScreen
                frameBorder="0"
            />
        );
    }
}

VisorCourseDetail.propTypes = {
    /**
   * Indica si se debe mostrar o no el visor
   */
    visorVisible: PropTypes.bool,
    /**
   * Muestra o oculta el visor
   */
    onVisibilityToggled: PropTypes.func.isRequired,
    /**
   * Estado de la aplicación que se pasa al visor
   */
    state: PropTypes.object.isRequired,
};
