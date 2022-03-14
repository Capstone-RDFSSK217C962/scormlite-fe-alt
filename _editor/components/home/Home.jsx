import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import Router from 'next/router'

// import { Card } from "./Card";

// import styles from "../styles/components/Content.module.scss";

function Home() {
    const [courses, setCourses] = useState([
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
    ]);

    return (
        <div >
            <div >
                <h2>Dashboard</h2>
                <div >
                    <h3>Tambah Course</h3>
                    <p>Mari mulai membuat proyek kelas SCORM</p>
                    <div

                    >
                        <div >
                            <div/>
                            <p>Buat Kelas Baru</p>
                        </div>
                    </div>
                </div>
                <h2>Courses Terbaru</h2>
                <Link to="/editor">Test Open Editor</Link>
                {/* <Card courses={courses} /> */}
            </div>
        </div>
    );
}

export default Home;
