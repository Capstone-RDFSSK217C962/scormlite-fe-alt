import React, { Component } from "react";

import DashboardNavbar from "../dashboard_navbar/DashboardNavbar";
import CourseCard from "../course_card/CourseCard";
import CourseService from "../course_card/course.service";
import "../home/Home.module.scss";

class AllCourses extends Component {

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
                  (error.response && error.response.message) ||
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
                <DashboardNavbar />
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
