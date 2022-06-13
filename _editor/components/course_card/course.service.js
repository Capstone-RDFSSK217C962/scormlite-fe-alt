import axios from 'axios';
import authHeader from '../auth/auth-header';
import 'regenerator-runtime/runtime';

const API_URL = 'http://localhost:3000/api/courses/';

class CourseService {

    createCourse(title, desc, code, duration, package_url) {
        return axios.post(API_URL, { title, desc, code, duration, package_url }, { headers: authHeader() });
    }

    getCourseById(id) {
        return axios.get(API_URL + id, { headers: authHeader() });
    }

    updateCourse(id, title, desc, code, duration, package_url, published) {
        return axios.put(API_URL + id, { title, desc, code, duration, package_url, published }, { headers: authHeader() });
    }

    updateState(id, module) {
        return axios.put(API_URL + id, { module }, { headers: authHeader() });
    }

    getCourseByTitle() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    getAllCourses() {
        return axios.get(API_URL, { headers: authHeader() });
    }

    deleteCourseById(id) {
        return axios.delete(API_URL + id, { headers: authHeader() });
    }

    deleteAllCourses() {
        return axios.delete(API_URL, { headers: authHeader() });
    }
}

export default new CourseService();
