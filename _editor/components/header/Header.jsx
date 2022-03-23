import React from "react";

import './Header.module.scss';

function Header() {
    return (
        <div className="headerContainer">
            <div className="appName">Scorm Lite</div>
            <div className="headerWrapper">
                <div className="title">
                    <span>Brenda</span>
                </div>
                <div className="profile" />
            </div>
        </div>
    );
}

export default Header;
