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
                    courses: response.data,
                });
            },
            error => {
                this.setState({
                    courses:
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

    render() {
        const { courses } = this.state;

        return (
            <div style={{ display: 'flex' }}>
                <DashboardNavbar />
                <div className="container contentwrapper">
                    <h2>Semua Course</h2>
                    <CourseCard courses={courses ? courses : []} />
                </div>
            </div>
        );
    }}

export default AllCourses;
