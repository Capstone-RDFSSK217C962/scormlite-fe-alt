import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Router from 'next/router'

import Header from "../header/Header";
import DashboardNavbar from "../dashboard_navbar/DashboardNavbar";
import { ModuleForm } from "../module_form/ModuleForm";
// import RecentCourse

import "../home/Home.module.scss";
import "../course_card/CourseCard.module.scss";

function CourseDetail() {
    return (
        <div>
            <DashboardNavbar />
            <div className="container contentwrapper">
                <h2>Cloud Computing (TKIT1234)</h2>
                <h4>Deskripsi Course</h4>
                <p>
          Kuliah ini membahas tentang komputasi awan dan penggunaannya di
          organisasi.
                </p>
                <div className="courseFooter">
                    <div className="courseStatus">Draf</div>
                </div>
                <ModuleForm />
            </div>
        </div>
    );
}

export default CourseDetail;
