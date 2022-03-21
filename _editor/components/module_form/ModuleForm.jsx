import React from "react";
import { Link } from "react-router-dom";

import "./ModuleForm.module.scss";

export const ModuleForm = () => {
    return (
        <div className="wrapper">
            <div className="emptyStateContainer">
                <div className="faceIcon" />
                <h3>Course masih kosong, tambahkan modul sekarang!</h3>
                <Link to="/editor">
                    <a>Tambah Modul</a>
                </Link>
            </div>
        </div>
    );
};
