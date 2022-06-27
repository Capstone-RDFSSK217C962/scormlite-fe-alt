import React, { Component } from "react";
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from "react-validation/build/button";

import CourseService from "../../../core/services/course.service";
import LoadingSpinner from "../loading_spinner/LoadingSpinner";

import "../home/Home.module.scss";
import "./CreateCourse.module.scss";

class CreateCourse extends Component {

    constructor(props) {
        super(props);
        this.handleCreateCourse = this.handleCreateCourse.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangePackageUrl = this.onChangePackageUrl.bind(this);

        this.state = {
            title: '',
            desc: '',
            duration: '',
            code: '',
            package_url: '',
            successful: false,
            message: '',
            id: '',
            isLoading: false,
        };
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

    handleCreateCourse(e) {
        e.preventDefault();

        this.setState({
            message: '',
            successful: false,
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            this.setState({ isLoading: true });
            CourseService.createCourse(
                this.state.title,
                this.state.desc,
                this.state.code,
                this.state.duration,
                this.state.package_url
            ).then(
                (response) => {
                    if (response.status === 200) {
                        this.setState({
                            isLoading: false,
                            successful: true,
                            id: response.data.id,

                        });
                        this.props.history.push(`/courses/${this.state.id}`);
                    }
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
                    this.setState({
                        isLoading: false,
                        successful: false,
                        message: resMessage,
                    });
                }
            );
        }
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                <div className="container contentwrapper">
                    <h2>Tambah Course</h2>
                    {this.state.isLoading ? (<LoadingSpinner/>) : <Form onSubmit={this.handleCreateCourse}
                        ref={(c) => {
                            this.form = c;
                        }}
                    >
                        <div className="form">
                            <label>Nama Kuliah</label>
                            <Input
                                type="text"
                                data-identity="input-course-title"
                                placeholder="Masukkan nama kuliah"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                            />
                        </div>
                        <div className="form">
                            <label>Kode Kuliah</label>
                            <Input
                                type="text"
                                data-identity="input-course-code"
                                placeholder="cth. TKIT1234"
                                value={this.state.code}
                                onChange={this.onChangeCode}
                            />
                        </div>
                        <div className="form">
                            <label>Durasi Kuliah</label>
                            <Input
                                type="text"
                                data-identity="input-course-title"
                                placeholder="Cth. 14 Pertemuan"
                                value={this.state.duration}
                                onChange={this.onChangeDuration}
                            />
                        </div>
                        <div className="form">
                            <label>Deskripsi Kuliah</label>
                            <Input
                                type="textarea"
                                data-identity="input-course-title"
                                placeholder="Masukkan deskripsi kuliah"
                                value={this.state.desc}
                                onChange={this.onChangeDesc}
                                style={{ height: "4em", width: "50em" }}
                            />
                        </div>
                        <div className="buttonWrapper">
                            <button className="btn btn-primary btn-block" style={{ backgroundColor: "#3D5AFE", padding: "10px", borderRadius: "10px", borderColor: "#3D5AFE", width: "20%" }}
                                disabled={this.state.loading}>
                                <span>Buat Course</span>
                            </button>
                        </div>
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>}

                </div>
            </div>
        );
    }
}

export default CreateCourse;
