import React from "react";
import Router from 'next/router';

import styles from "../styles/components/LeftNavbar.module.scss";

function LeftNavbar() {
    return (
        <div className={styles.navContainer}>
            <div className={styles.wrapper}>
                <ul>
                    <li onClick={() => Router.push("/")}>
                        <div className={styles.dashboardIcon}/>
                        <a>Dashboard</a>
                    </li>
                    <li onClick={() => Router.push("/all-courses")}>
                        <div className={styles.coursesIcon}/>
                        <a >Semua Courses</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftNavbar;
