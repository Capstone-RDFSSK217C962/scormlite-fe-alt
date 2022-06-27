import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Home.module.scss';
import CourseCard from '../course_card/CourseCard';
import CourseService from "../../../core/services/course.service";
import ErrorPage from "../error/ErrorPage";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            error: {
                status: null,
                message: '',
            },
        };
    }

    componentDidMount() {
        CourseService.getAllCourses().then(
            response => {
                this.setState({
                    courses: response.data,
                });
            },
            error => {
                this.setState({
                    error: {
                        status: error.response.status,
                        message: (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                          error.message ||
                          error.toString(),
                    },
                });
            }
        );
    }

    render() {

        const { courses } = this.state;

        if (this.state.error.status) {
            return <ErrorPage error={this.state.error}/>;
        }

        return (
            <div style={{ display: 'flex' }}>
                <div className="container contentwrapper">
                    <h2>Dashboard</h2>
                    <div className="addCourseWrapper">
                        <h3>Tambah Course</h3>
                        <p>Mari mulai membuat proyek kelas SCORM</p>
                        <Link to="/courses/create">
                            <div className="addCourseButtonContainer">
                                <div className="addCourseButton">
                                    <div className="addIcon" />
                                    <p>Buat Kelas Baru</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <h2>Courses Terbaru</h2>
                    {courses.length > 0 ? (
                        <CourseCard courses={courses} />) : <p>Belum ada course.</p>
                    }
                </div>
            </div>
        );
    }
}
