import React, { Component } from "react";

import CourseCard from "../course_card/CourseCard";
import CourseService from "../../../core/services/course.service";
import "../home/Home.module.scss";
import ErrorPage from "../error/ErrorPage";

class AllCourses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            isLoading: false,
            error: {
                status: null,
                message: '',
            },
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        CourseService.getAllCourses().then(
            response => {
                if (response.status === 200)
                {this.setState({
                    isLoading: false,
                    courses: response.data,
                });}
            },
            error => {
                this.setState({
                    isLoading: false,
                    courses: [],
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
                    <h2>Semua Course</h2>
                    {courses.length > 0 ? (
                        <CourseCard courses={courses} />) : <p>Belum ada course.</p>
                    }
                </div>
            </div>
        );
    }}

export default AllCourses;
