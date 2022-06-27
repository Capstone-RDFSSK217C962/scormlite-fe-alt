import api from "./api";
import 'regenerator-runtime/runtime';

class CourseService {

    createCourse(title, desc, code, duration, package_url) {
        return api.post('/courses', { title, desc, code, duration, package_url })
            .then((response) => {
                return response;
            });
    }

    getCourseById(id) {
        return api.get(`/courses/${id}`)
            .then((response) => {
                return response;
            });
    }

    updateCourse(id, title, desc, code, duration, package_url, published) {
        return api.put(`/courses/${id}`, { title, desc, code, duration, package_url, published })
            .then((response) => {
                return response;
            });
    }

    updateState(id, module) {
        return api.put(`/courses/${id}`, { module })
            .then((response) => {
                return response.data;
            });
    }

    getCourseByTitle() {
        return api.get('/courses')
            .then((response) => {
                return response;
            });
    }

    getAllCourses() {
        return api.get('/courses')
            .then((response) => {
                return response;
            });
    }

    deleteCourseById(id) {
        return api.delete(`/courses/${id}`)
            .then((response) => {
                return response;
            });
    }

    deleteAllCourses() {
        return api.delete('/courses')
            .then((response) => {
                return response;
            });
    }
}

export default new CourseService();
