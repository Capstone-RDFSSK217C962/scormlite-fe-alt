import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CourseService from '../../../core/services/course.service';

import Visor from '../../../_visor/containers/Visor';

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
                    <h3>Course masih kosong, tambahkan modul sekarang!</h3>
                    <Link to={`/editor/${this.props.id}`}>
                        <a>Tambah Modul</a>
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
