import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CourseService from '../course_card/course.service';

import Visor from '../../../_visor/containers/Visor';

import "./ModuleForm.module.scss";

class ModuleForm extends Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount () {
    //     CourseService.getCourseById(this.props.match.params.id).then(
    //         response => {
    //             if ('module' in response.data) {
    //                 this.props.dispatch(importState(serialize(response.data.module.undoGroup)));
    //             }
    //         },
    //         error => {
    //             return error;
    //         }
    //     );
    // }

    render() {
        return (
            <div className="wrapperDetail">
                <div className="emptyStateContainer">
                    <div className="faceIcon" />
                    <h3>Course masih kosong, tambahkan modul sekarang!</h3>
                    <Link to={`editor/${this.props.id}`}>
                        <a>Tambah Modul</a>
                    </Link>
                    {/* <Visor id="visor"
                    title={title}
                    visorVisible={true}
                    // onVisibilityToggled={()=> this.setState({ visorVisible: !this.state.visorVisible })}
                    filesUploaded={this.props.store.getState().filesUploaded }
                    state={{ ...this.props.store.getState(), filesUploaded: this.props.store.getState().filesUploaded, status: this.props.store.getState().status }}/> */}
                </div>
            </div>
        );
    }
}

export default ModuleForm;

ModuleForm.propTypes = {
    id: PropTypes.string,
};
