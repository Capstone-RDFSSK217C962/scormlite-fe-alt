import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import DashboardNavbar from '../dashboard_navbar/DashboardNavbar';
import './Home.module.scss';
import CourseCard from '../course_card/CourseCard';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [
                {
                    id: 'TKIT1234',
                    name: 'Cloud Computing',
                    duration: '14 Pertemuan',
                    status: 'Draf',
                },
                {
                    id: 'TKIT7842',
                    name: 'Software Architecture',
                    duration: '14 Pertemuan',
                    status: 'Draf',
                },
                {
                    id: 'TKIT2343',
                    name: 'User Experience',
                    duration: '14 Minggu',
                    status: 'Draf',
                },
            ],
        };
    }

    render() {
        const { courses } = this.state;

        return (
            <div>
                <DashboardNavbar />
                <div className="container contentwrapper">
                    <h2>Dashboard</h2>
                    <div className="addCourseWrapper">
                        <h3>Tambah Course</h3>
                        <p>Mari mulai membuat proyek kelas SCORM</p>
                        <Link to="/new-course">
                            <div className="addCourseButtonContainer">
                                <div className="addCourseButton">
                                    <div className="addIcon" />
                                    <p>Buat Kelas Baru</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <h2>Courses Terbaru</h2>
                    <CourseCard coursesArrayObject={courses} />
                </div>
            </div>
        );
    }
}
