import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./ModuleForm.module.scss";

class ModuleForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapperDetail">
                <div className="emptyStateContainer">
                    <div className="faceIcon" />
                    <h3>Course masih kosong, tambahkan konten sekarang!</h3>
                    <Link to={`editor/${this.props.id}`}>
                        <a>Tambah Konten</a>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ModuleForm;

ModuleForm.propTypes = {
    id: PropTypes.string,
};
