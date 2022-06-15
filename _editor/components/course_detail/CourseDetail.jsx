import React, { Component } from "react";
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseService from "../course_card/course.service";

import ModuleForm from "../module_form/ModuleForm";
import VisorCourseDetail from "../../../_visor/containers/VisorCourseDetail";

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        const isDeleteSuccess = CourseService.deleteCourseById(this.state.id);
        if (isDeleteSuccess) {
            this.props.history.push('/');
            window.location.reload();
        }
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        this.state.id = id;

        CourseService.getCourseById(id).then(
            response => {
                if ('module' in response) {
                    this.setState({
                        isModuleCreated: true,
                    });
                }
                this.setState({
                    course: response,
                });
            },
            error => {
                this.setState({
                    course:
                  (error.response && error.response.message) ||
                  error.message || error.toString(),
                });

                if (error.response && error.response.status === 401) {
                    EventBus.dispatch("logout");
                }
            }
        );
    }

    // const handleDeleteReply = async (id: string): Promise<void> => {
    //     const isDeleteSuccess = await deleteReplyApi(id);
    //     if (isDeleteSuccess) {
    //       setReplies({
    //         content: _.compact(
    //           _.map(replies?.content, (data) => (data._id !== id ? data : null)),
    //         ),
    //         pagination: replies?.pagination,
    //       });
    //       setReplyCount(replyCount - 1);
    //     }
    //   };

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
                    {/* <ModuleForm id={this.state.id}/>
                    {/* <div>{...this.props.store.getState().undoGroup.present.navItemsById}</div> */}
                    {/* {console.log(...this.props.store.getState().undoGroup.present)} */}
                    {/* <VisorCourseDetail id="visor"
                        title={"test"}
                        visorVisible
                        filesUploaded={this.props.store.getState().filesUploaded }
                        state={{ ...this.props.store.getState().undoGroup.present, filesUploaded: this.props.store.getState().filesUploaded, status: this.props.store.getState().status }}/> */} */}
                </div>
            </div>
        );
    }}

export default withRouter(CourseDetail);
