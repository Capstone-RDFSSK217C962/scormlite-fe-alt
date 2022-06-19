import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom';
import CourseService from "../course_card/course.service";

import ModuleForm from "../module_form/ModuleForm";
import VisorCourseDetail from "../../../_visor/containers/VisorCourseDetail";

import "../home/Home.module.scss";
import "../course_card/CourseCard.module.scss";

class CourseDetail extends Component {

    constructor(props) {
        super(props);

        console.log(...this.props.store.getState().undoGroup.present.navItemsById);
        this.state = {
            course: {},
            id: '',
            isModuleCreated: false,
        };

        this.handleDeleteCourse = this.handleDeleteCourse.bind(this);
    }

    handleDeleteCourse() {
        CourseService.deleteCourseById(this.state.id).then(
            response => {
                if (response.status === 200) {
                    this.props.history.push('/');
                }
            });
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        this.state.id = id;

        CourseService.getCourseById(id).then(
            response => {
                if ('module' in response.data) {
                    this.setState({
                        isModuleCreated: true,
                    });
                }
                this.setState({
                    course: response.data,
                });
            },
            error => {
                this.setState({
                    course: [],
                    error: (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                      error.message ||
                      error.toString(),
                });

            }
        );
    }

    render() {
        const { isModuleCreated } = this.state;
        return (
            <div style={{ display: 'flex' }}>
                <div className="container contentwrapper">
                    <h2>{this.state.course.title} ({this.state.course.code})</h2>
                    <h4>Deskripsi Course</h4>
                    <p>
                        {this.state.course.desc}
                    </p>
                    <div className="courseFooter">
                        <div className="courseStatus">
                            {this.state.course.published ? 'Hell yeah' : 'Draft'}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="editCourseIcon"/>
                            <Link to={`edit/${this.state.id}`}>
                                <button style={{ border: '0px', cursor: 'pointer', fontSize: '16px', marginLeft: '10px' }}>Ubah Informasi Course</button>
                            </Link>
                            <div className="deleteCourseIcon" style={{ marginLeft: '15px' }}/>
                            <button style={{ border: '0px', cursor: 'pointer', fontSize: '16px', marginLeft: '10px' }} onClick={this.handleDeleteCourse}>Hapus Course</button>
                        </div>

                    </div>
                    { isModuleCreated ? (<VisorCourseDetail id="visor"
                        title={"test"}
                        visorVisible
                        filesUploaded={this.props.store.getState().filesUploaded }
                        state={{ ...this.props.store.getState().undoGroup.present, filesUploaded: this.props.store.getState().filesUploaded, status: this.props.store.getState().status }}/>) : (<ModuleForm id={this.state.id}/>)

                    }
                </div>
            </div>
        );
    }}

export default withRouter(CourseDetail);
