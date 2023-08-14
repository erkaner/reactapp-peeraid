"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courseActions_1 = require("../_actions/courseActions");
const initialState = {
    courseIds: [],
    courses: {},
    courseEnrollments: [],
    currentCourseId: null,
    loading: false,
    error: null
};
const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case courseActions_1.CLEAR_COURSE_LOADING:
            return Object.assign(Object.assign({}, state), { loading: false, error: null });
        case courseActions_1.COURSE_DATAOPERATION_BEGIN:
        case courseActions_1.CREATE_COURSE_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case courseActions_1.CREATE_COURSE_SUCCESS: {
            const newCourse = action.payload.course;
            return Object.assign(Object.assign({}, state), { loading: false, error: null, courseIds: [...state.courseIds, newCourse.id], courses: Object.assign(Object.assign({}, state.courses), { [newCourse.id]: newCourse }) });
        }
        case courseActions_1.CREATE_COURSE_FAILURE:
        case courseActions_1.COURSE_DATAOPERATION_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        case courseActions_1.FETCH_ALLCOURSES_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case courseActions_1.FETCH_ALLCOURSES_SUCCESS: {
            const normalizedData = action.payload.normalizedData;
            return Object.assign(Object.assign({}, state), { loading: false, error: null, courses: normalizedData.entities.courses, courseIds: normalizedData.result });
        }
        case courseActions_1.FETCH_ALLCOURSES_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        case courseActions_1.FETCH_COURSEENROLLMENTS_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, error: null, courseEnrollments: action.payload.courseEnrollments });
        case courseActions_1.SET_CURRENTCOURSE_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, currentCourseId: action.payload.currentCourseId });
        case courseActions_1.ENROLL_USER_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case courseActions_1.ENROLL_USER_SUCCESS: {
            const { student, courseId } = action.payload;
            return Object.assign(Object.assign({}, state), { loading: false, courseEnrollments: student === null
                    ? state.courseEnrollments
                    : [
                        ...state.courseEnrollments,
                        {
                            studentId: student.id,
                            student,
                            courseId
                        }
                    ] });
        }
        case courseActions_1.ENROLL_USER_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        case courseActions_1.UNENROLL_USER_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case courseActions_1.UNENROLL_USER_SUCCESS: {
            const studentId = action.payload.studentId;
            return Object.assign(Object.assign({}, state), { loading: false, courseEnrollments: state.courseEnrollments.filter(e => e.studentId !== studentId) });
        }
        case courseActions_1.UNENROLL_USER_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        case courseActions_1.SELFENROLL_USER_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case courseActions_1.SELFENROLL_USER_SUCCESS: {
            const newCourse = action.payload.course;
            return Object.assign(Object.assign({}, state), { loading: false, error: null, courseIds: [...state.courseIds, newCourse.id], courses: Object.assign(Object.assign({}, state.courses), { [newCourse.id]: newCourse }) });
        }
        case courseActions_1.SELFENROLL_USER_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        default:
            return state;
    }
};
exports.default = courseReducer;
