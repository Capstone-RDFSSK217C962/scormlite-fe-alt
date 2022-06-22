import React, { Component } from "react";
import "./CourseCard.module.scss";
import { Link } from "react-router-dom";

class CourseCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="cardWrapper">
                {this.props.courses.map((course) => {
                    return (
                        <div key={course.id} className="cardContainer">
                            <p className="courseName">{course.title}</p>
                            <p className="courseInfo">
                                <span className="courseID">{course.code}</span> -
                                <span className="courseDuration"> {course.duration}</span>
                            </p>
                            <div className="courseFooter">
                                <div className="courseStatus">
                                    {course.module ?
                                        (course.module.everPublished ? 'Final' : 'Draf') :
                                        (course.published ? 'Final' : 'Draf')
                                    }
                                </div>
                                <Link to={`/courses/${course.id}`}>
                                    <button className="courseDetail">Lihat Detail</button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        );}
}

export default CourseCard;

