import React from "react";

import styles from "./DashboardNavbar.module.scss";

function DashboardNavbar() {
    return (
        <div className="navContainer">
            <div className="wrapperNavbar">
                <ul>
                    <li>
                        <div className="dashboardIcon"/>
                        <a>Dashboard</a>
                    </li>
                    <li >
                        <div className="coursesIcon"/>
                        <a >Semua Courses</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DashboardNavbar;
