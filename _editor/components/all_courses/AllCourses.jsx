import React, { Component } from "react";

import CourseCard from "../course_card/CourseCard";
import CourseService from "../course_card/course.service";
import "../home/Home.module.scss";

class AllCourses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            isLoading: false,
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
                const resMessage =
                    (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    isLoading: false,
                    courses: [],
                    error: resMessage,
                });
            }
        );
    }

    render() {
        const { courses } = this.state;

        return (
            <div style={{ display: 'flex' }}>
                <div className="container contentwrapper">
                    <h2>Semua Course</h2>
                    {courses.length > 0 ? (
                        <CourseCard courses={courses} />) : <p>No courses yet.</p>
                    }
                </div>
            </div>
        );
    }}

export default AllCourses;
