import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import Router from 'next/router'

import Header from '../header/Header';
// import { Card } from "./Card";

// import styles from "../styles/components/Content.module.scss";

function DashboardLayout() {
    return (
        <div >
            <Header/>
            {props.children}
        </div>
    );
}

export default DashboardLayout;
