import React from 'react';
import { NavLink } from 'react-router-dom';

import './DashboardNavbar.module.scss';

function DashboardNavbar() {
    return (
        <div className="navContainer">
            <div className="wrapperNavbar">
                <ul>
                    <NavLink exact to="/" activeClassName="active">
                        <div className="dashboardIcon" ><span>Dashboard</span></div>
                    </NavLink>
                    <NavLink exact to="/courses" activeClassName="active">
                        <div className="coursesIcon"><span>Semua Courses</span></div>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}

export default DashboardNavbar;
