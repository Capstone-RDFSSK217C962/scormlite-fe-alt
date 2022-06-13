import React, { Component } from "react";
import CourseService from "../course_card/course.service";

import DashboardNavbar from "../dashboard_navbar/DashboardNavbar";
import ModuleForm from "../module_form/ModuleForm";

import { Link } from 'react-router-dom';

import "../home/Home.module.scss";
import "../course_card/CourseCard.module.scss";

class CourseDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            course: {},
            id: '',
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
                this.setState({
                    course: response.data,
                });
            },
            error => {
                this.setState({
                    course:
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString(),
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
        return (
            <div style={{ display: 'flex' }}>
                <DashboardNavbar />
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
                    <ModuleForm id={this.state.id}/>
                </div>
            </div>
        );
    }}

export default CourseDetail;
