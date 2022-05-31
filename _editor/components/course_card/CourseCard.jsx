import React from "react";
import "./CourseCard.module.scss";

function CourseCard(props) {
    return (
        <div className="cardWrapper">
            {props.coursesArrayObject.map((course) => {
                return (
                    <div key={course.id} className="cardContainer">
                        <p className="courseName">{course.name}</p>
                        <p className="courseInfo">
                            <span className="courseID">{course.id}</span> -
                            <span className="courseDuration"> {course.duration}</span>
                        </p>
                        <div className="courseFooter">
                            <div className="courseStatus">{course.status}</div>
                            <button className="courseDetail">Lihat Detail</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CourseCard;

