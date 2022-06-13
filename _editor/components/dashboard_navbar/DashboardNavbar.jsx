import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DashboardNavbar.module.scss';

function DashboardNavbar() {
    return (
        <div className="navContainer">
            <div className="wrapperNavbar">
                <ul>
                    <Link to="/">
                        <div className="dashboardIcon"><span>Dashboard</span></div>
                    </Link>
                    <Link to="/courses">
                        <div className="coursesIcon"><span>Semua Courses</span></div>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default DashboardNavbar;
