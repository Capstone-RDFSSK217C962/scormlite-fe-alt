import React from "react";
import "./LoadingSpinner.module.scss";

export default function LoadingSpinner() {
    return (
        <div className="spinner-container">
            <div className="loading-spinner"/>
            <h4 style={{ marginTop: '30px' }}>Mohon tunggu</h4>
        </div>
    );
}
