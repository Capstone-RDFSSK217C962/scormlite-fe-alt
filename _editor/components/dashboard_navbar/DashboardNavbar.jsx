import React from 'react';
import { Link } from 'react-router-dom';

import styles from './DashboardNavbar.module.scss';

function DashboardNavbar() {
    return (
        <div className="navContainer">
            <div className="wrapperNavbar">
                <ul>
                    <Link to="/">
                        <div className="dashboardIcon">Dashboard</div>
                    </Link>
                    <Link to="/all-courses">
                        <div className="coursesIcon">Semua Courses</div>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default DashboardNavbar;
