import React, { Component } from "react";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";

import CourseService from "../course_card/course.service";
import LoadingSpinner from "../loading_spinner/LoadingSpinner";
import ErrorPage from "../error/ErrorPage";

import "../home/Home.module.scss";
import "./EditCourse.module.scss";

class EditCourse extends Component {

    constructor(props) {
        super(props);
        this.handleUpdateCourse = this.handleUpdateCourse.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePackageUrl = this.onChangePackageUrl.bind(this);

        this.state = {
            id: '',
            title: '',
            desc: '',
            duration: '',
            code: '',
            package_url: '',
            published: false,
            successful: false,
            message: '',
            isLoading: false,
            error: {
                status: null,
                message: '',
            },
        };
    }

    componentDidMount() {

        const { id } = this.props.match.params;

        CourseService.getCourseById(id).then(
            response => {
                const { data } = response;
                this.setState({
                    id: id,
                    title: data.title,
                    desc: data.desc,
                    duration: data.duration,
                    code: data.code,
                    package_url: data.package_url,
                });

            },
            error => {
                this.setState({
                    error: {
                        status: error.response.status,
                        message: (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                          error.message ||
                          error.toString(),
                    },
                });
            }
        );
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDesc(e) {
        this.setState({
            desc: e.target.value,
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value,
        });
    }

    onChangeCode(e) {
        this.setState({
            code: e.target.value,
        });
    }

    onChangePackageUrl(e) {
        this.setState({
            package_url: e.target.value,
        });
    }

    handleUpdateCourse(e) {
        e.preventDefault();

        this.setState({
            message: '',
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.setState({ isLoading: true });
            CourseService.updateCourse(
                this.state.id,
                this.state.title,
                this.state.desc,
                this.state.duration,
                this.state.code,
                this.state.package_url,
                this.state.published
            ).then(
                (response) => {
                    if (response.status === 200) {
                        this.setState({
                            isLoading: false,
                            successful: true,
                            message: response.data.message,
                        });
                        this.props.history.push(`/courses/${this.state.id}`);
                    }
                },
                (error) => {
                    this.setState({
                        isLoading: false,
                        successful: false,
                        error: {
                            status: error.response.status,
                            message: (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                              error.message ||
                              error.toString(),
                        },
                    });
                }
            );
        }
    }

    render() {

        if (this.state.error.status) {
            return <ErrorPage error={this.state.error}/>;
        }

        return (
            <div style={{ display: 'flex' }}>
                <div className="container contentwrapper">
                    <h2>Edit Course</h2>
                    {this.state.isLoading ? (<LoadingSpinner/>) :
                        <Form onSubmit={this.handleUpdateCourse}
                            ref={(c) => {
                                this.form = c;
                            }}
                        >
                            <div className="form">
                                <label>Nama Kuliah</label>
                                <Input
                                    type="text"
                                    data-identity="input-course-title"
                                    placeholder="Mis: Kecerdasan Buatan"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form">
                                <label>Kode Kuliah</label>
                                <Input
                                    type="text"
                                    data-identity="input-course-code"
                                    placeholder="Mis: TKIT 12345"
                                    value={this.state.code}
                                    onChange={this.onChangeCode}
                                />
                            </div>
                            <div className="form">
                                <label>Durasi Kuliah</label>
                                <Input
                                    type="text"
                                    data-identity="input-course-title"
                                    placeholder="Mis: 14 Pertemuan"
                                    value={this.state.duration}
                                    onChange={this.onChangeDuration}
                                />
                            </div>
                            <div className="form">
                                <label>Deskripsi Kuliah</label>
                                <Input
                                    type="textarea"
                                    data-identity="input-course-title"
                                    value={this.state.desc}
                                    onChange={this.onChangeDesc}
                                    style={{ height: "4em", width: "50em" }}
                                />
                            </div>
                            <div className="buttonWrapper">
                                <button className="btn btn-primary btn-block" style={{ backgroundColor: "#3D5AFE", padding: "10px", borderRadius: "10px", borderColor: "#3D5AFE", width: "20%" }}
                                    disabled={this.state.loading}>
                                    <span>Simpan</span>
                                </button>
                            </div>
                            <CheckButton
                                style={{ display: "none" }}
                                ref={c => {
                                    this.checkBtn = c;
                                }}
                            />
                        </Form>
                    }
                </div>
            </div>
        );
    }
}

export default EditCourse;
