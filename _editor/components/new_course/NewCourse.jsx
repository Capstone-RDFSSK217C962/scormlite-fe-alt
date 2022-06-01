import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Router from 'next/router'

import Header from "../header/Header";
import DashboardNavbar from "../dashboard_navbar/DashboardNavbar";
// import RecentCourse

import "../home/Home.module.scss";
import "./NewCourse.module.scss";

function NewCourse() {
    return (
        <div style={{ display: 'flex' }}>
            <DashboardNavbar />
            <div className="container contentwrapper">
                <h2>Tambah Course</h2>
                <form>
                    <div className="form">
                        <label>Nama Kuliah</label>
                        <input
                            type="text"
                            data-identity="input-course-title"
                            placeholder="Masukkan nama kuliah"
                        />
                    </div>
                    <div className="form">
                        <label>Kode Kuliah</label>
                        <input
                            type="text"
                            data-identity="input-course-code"
                            placeholder="cth. TKIT1234"
                        />
                    </div>
                    <div className="form">
                        <label>Durasi Kuliah</label>
                        <input
                            type="text"
                            data-identity="input-course-title"
                            placeholder="Cth. 14 Pertemuan"
                        />
                    </div>
                    <div className="form">
                        <label>Deskripsi Kuliah</label>
                        <input
                            type="textarea"
                            data-identity="input-course-title"
                            placeholder="Masukkan deskripsi kuliah"
                        />
                    </div>
                    <div className="buttonWrapper">
                        <Link className="submitButton" to="/course-detail">
                            <a>Buat Course</a>
                        </Link>
                        {/* <button
              className={stylesForm.submitButton}
              onClick={() => Router.push("/course-detail")}
            >
              Buat Course
            </button> */}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewCourse;
