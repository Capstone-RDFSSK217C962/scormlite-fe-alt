import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../header/Header";
import DashboardNavbar from "../dashboard_navbar/DashboardNavbar";
import RecentCourses from "../course_card/CourseCard";

import "../home/Home.module.scss";
import CourseCard from "../course_card/CourseCard";

function AllCourses() {
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
            <DashboardNavbar />
            <div className="container contentwrapper">
                <h2>Semua Course</h2>
                <CourseCard coursesArrayObject={courses} />
            </div>
        </div>
    );
}

export default AllCourses;
