import React from "react";

import './Header.module.scss';

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                <div className="title">
                    <h2>Jennie</h2>
                </div>
                <div className="profile" />
            </div>
        </div>
    );
}

export default Header;
