"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selfEnrollUserFailure = exports.selfEnrollUserSuccess = exports.selfEnrollUserBegin = exports.unenrollUserFailure = exports.unenrollUserSuccess = exports.unenrollUserBegin = exports.enrollUserFailure = exports.enrollUserSuccess = exports.enrollUserBegin = exports.setCurrentCourseSuccess = exports.fetchCourseEnrollmentsSuccess = exports.fetchAllCoursesFailure = exports.fetchAllCoursesSuccess = exports.fetchAllCoursesBegin = exports.createCourseFailure = exports.createCourseSuccess = exports.createCourseBegin = exports.dataOperationFailure = exports.dataOperationBegin = exports.clearCourseLoading = exports.SELFENROLL_USER_FAILURE = exports.SELFENROLL_USER_SUCCESS = exports.SELFENROLL_USER_BEGIN = exports.UNENROLL_USER_FAILURE = exports.UNENROLL_USER_SUCCESS = exports.UNENROLL_USER_BEGIN = exports.ENROLL_USER_FAILURE = exports.ENROLL_USER_SUCCESS = exports.ENROLL_USER_BEGIN = exports.SET_CURRENTCOURSE_SUCCESS = exports.FETCH_COURSEENROLLMENTS_SUCCESS = exports.FETCH_ALLCOURSES_FAILURE = exports.FETCH_ALLCOURSES_SUCCESS = exports.FETCH_ALLCOURSES_BEGIN = exports.CREATE_COURSE_FAILURE = exports.CREATE_COURSE_SUCCESS = exports.CREATE_COURSE_BEGIN = exports.COURSE_DATAOPERATION_FAILURE = exports.COURSE_DATAOPERATION_BEGIN = exports.CLEAR_COURSE_LOADING = void 0;
// Action types
exports.CLEAR_COURSE_LOADING = "CLEAR_COURSE_LOADING";
exports.COURSE_DATAOPERATION_BEGIN = "COURSE_DATAOPERATION_BEGIN";
exports.COURSE_DATAOPERATION_FAILURE = "COURSE_DATAOPERATION_FAILURE";
exports.CREATE_COURSE_BEGIN = "CREATE_COURSE_BEGIN";
exports.CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
exports.CREATE_COURSE_FAILURE = "CREATE_COURSE_FAILURE";
exports.FETCH_ALLCOURSES_BEGIN = "FETCH_ALLCOURSES_BEGIN";
exports.FETCH_ALLCOURSES_SUCCESS = "FETCH_ALLCOURSES_SUCCESS";
exports.FETCH_ALLCOURSES_FAILURE = "FETCH_ALLCOURSES_FAILURE";
exports.FETCH_COURSEENROLLMENTS_SUCCESS = "FETCH_COURSEENROLLMENTS_SUCCESS";
exports.SET_CURRENTCOURSE_SUCCESS = "SET_CURRENTCOURSE_SUCCESS";
exports.ENROLL_USER_BEGIN = "ENROLL_USER_BEGIN";
exports.ENROLL_USER_SUCCESS = "ENROLL_USER_SUCCESS";
exports.ENROLL_USER_FAILURE = "ENROLL_USER_FAILURE";
exports.UNENROLL_USER_BEGIN = "UNENROLL_USER_BEGIN";
exports.UNENROLL_USER_SUCCESS = "UNENROLL_USER_SUCCESS";
exports.UNENROLL_USER_FAILURE = "UNENROLL_USER_FAILURE";
exports.SELFENROLL_USER_BEGIN = "SELFENROLL_USER_BEGIN";
exports.SELFENROLL_USER_SUCCESS = "SELFENROLL_USER_SUCCESS";
exports.SELFENROLL_USER_FAILURE = "SELFENROLL_USER_FAILURE";
// Action creator generator
const createAction = (type) => (payload) => ({
    type,
    payload
});
// Action creators
exports.clearCourseLoading = createAction(exports.CLEAR_COURSE_LOADING);
exports.dataOperationBegin = createAction(exports.COURSE_DATAOPERATION_BEGIN);
exports.dataOperationFailure = createAction(exports.COURSE_DATAOPERATION_FAILURE);
exports.createCourseBegin = createAction(exports.CREATE_COURSE_BEGIN);
exports.createCourseSuccess = createAction(exports.CREATE_COURSE_SUCCESS);
exports.createCourseFailure = createAction(exports.CREATE_COURSE_FAILURE);
exports.fetchAllCoursesBegin = createAction(exports.FETCH_ALLCOURSES_BEGIN);
exports.fetchAllCoursesSuccess = createAction(exports.FETCH_ALLCOURSES_SUCCESS);
exports.fetchAllCoursesFailure = createAction(exports.FETCH_ALLCOURSES_FAILURE);
exports.fetchCourseEnrollmentsSuccess = createAction(exports.FETCH_COURSEENROLLMENTS_SUCCESS);
exports.setCurrentCourseSuccess = createAction(exports.SET_CURRENTCOURSE_SUCCESS);
exports.enrollUserBegin = createAction(exports.ENROLL_USER_BEGIN);
exports.enrollUserSuccess = createAction(exports.ENROLL_USER_SUCCESS);
exports.enrollUserFailure = createAction(exports.ENROLL_USER_FAILURE);
exports.unenrollUserBegin = createAction(exports.UNENROLL_USER_BEGIN);
exports.unenrollUserSuccess = createAction(exports.UNENROLL_USER_SUCCESS);
exports.unenrollUserFailure = createAction(exports.UNENROLL_USER_FAILURE);
exports.selfEnrollUserBegin = createAction(exports.SELFENROLL_USER_BEGIN);
exports.selfEnrollUserSuccess = createAction(exports.SELFENROLL_USER_SUCCESS);
exports.selfEnrollUserFailure = createAction(exports.SELFENROLL_USER_FAILURE);
