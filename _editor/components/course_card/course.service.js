import api from "../../../services/api";
import 'regenerator-runtime/runtime';

class CourseService {

    createCourse(title, desc, code, duration, package_url) {
        return api.post('/courses', { title, desc, code, duration, package_url })
            .then((response) => {
                return response.data;
            });
    }

    getCourseById(id) {
        return api.get(`/courses/${id}`)
            .then((response) => {
                return response.data;
            });
    }

    updateCourse(id, title, desc, code, duration, package_url, published) {
        return api.put(`/courses/${id}`, { title, desc, code, duration, package_url, published })
            .then((response) => {
                return response.data;
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
                return response.data;
            });
    }

    getAllCourses() {
        return api.get('/courses')
            .then((response) => {
                return response.data;
            });
    }

    deleteCourseById(id) {
        return api.delete(`/courses/${id}`)
            .then((response) => {
                return response.data;
            });
    }

    deleteAllCourses() {
        return api.delete('/courses')
            .then((response) => {
                return response.data;
            });
    }
}

export default new CourseService();
