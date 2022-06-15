import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './Home.module.scss';
import CourseCard from '../course_card/CourseCard';
import CourseService from "../course_card/course.service";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
        };
    }

    componentDidMount() {
        CourseService.getAllCourses().then(
            response => {
                this.setState({
                    courses: response,
                });
            },
            error => {
                this.setState({
                    courses:
                  (error.response && error.response.data.message) ||
                  error.message || error.toString(),
                });

                if (error.response && error.response.status === 401) {
                    EventBus.dispatch("logout");
                }
            }
        );
    }

    render() {
        const { courses } = this.state;

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
                        <CourseCard courses={courses} />) : <p>No courses yet.</p>
                    }
                </div>
            </div>
        );
    }
}
