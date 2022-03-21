import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Router from 'next/router'

import Header from "../header/Header";
import DashboardNavbar from "../dashboard_navbar/DashboardNavbar";
import RecentCourses from "../course_card/CourseCard";
// import RecentCourse

import "./Home.module.scss";
import CourseCard from "../course_card/CourseCard";

function Home() {
    const courses = [
        {
            id: "TKIT1234",
            name: "Cloud Computing",
            duration: "14 Pertemuan",
            status: "Draf",
        },
        {
            id: "TKIT7842",
            name: "Software Architecture",
            duration: "14 Pertemuan",
            status: "Draf",
        },
        {
            id: "TKIT2343",
            name: "User Experience",
            duration: "14 Minggu",
            status: "Draf",
        },
    ];

    return (
        <div>
            <Header />
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
                <Link to="/editor">Test Open Editor</Link>
                <CourseCard coursesArrayObject={courses} />
                {/* <Card courses={courses} /> */}
            </div>
        </div>
    );
}

export default Home;
