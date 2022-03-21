import React from "react";
import { Link } from "react-router-dom";

import styles from "./DashboardNavbar.module.scss";

function DashboardNavbar() {
    return (
        <div className="navContainer">
            <div className="wrapperNavbar">
                <ul>
                    <Link to="/">
                        <li>
                            <div className="dashboardIcon" />
                            <a>Dashboard</a>
                        </li>
                    </Link>
                    <Link to="/all-courses">
                        <li>
                            <div className="coursesIcon" />
                            <a>Semua Courses</a>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default DashboardNavbar;
