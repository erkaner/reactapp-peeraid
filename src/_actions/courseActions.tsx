// Action types
export const CLEAR_COURSE_LOADING = "CLEAR_COURSE_LOADING";
export const COURSE_DATAOPERATION_BEGIN = "COURSE_DATAOPERATION_BEGIN";
export const COURSE_DATAOPERATION_FAILURE = "COURSE_DATAOPERATION_FAILURE";
export const CREATE_COURSE_BEGIN = "CREATE_COURSE_BEGIN";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const CREATE_COURSE_FAILURE = "CREATE_COURSE_FAILURE";
export const FETCH_ALLCOURSES_BEGIN = "FETCH_ALLCOURSES_BEGIN";
export const FETCH_ALLCOURSES_SUCCESS = "FETCH_ALLCOURSES_SUCCESS";
export const FETCH_ALLCOURSES_FAILURE = "FETCH_ALLCOURSES_FAILURE";
export const FETCH_COURSEENROLLMENTS_SUCCESS = "FETCH_COURSEENROLLMENTS_SUCCESS";
export const SET_CURRENTCOURSE_SUCCESS = "SET_CURRENTCOURSE_SUCCESS";
export const ENROLL_USER_BEGIN = "ENROLL_USER_BEGIN";
export const ENROLL_USER_SUCCESS = "ENROLL_USER_SUCCESS";
export const ENROLL_USER_FAILURE = "ENROLL_USER_FAILURE";
export const UNENROLL_USER_BEGIN = "UNENROLL_USER_BEGIN";
export const UNENROLL_USER_SUCCESS = "UNENROLL_USER_SUCCESS";
export const UNENROLL_USER_FAILURE = "UNENROLL_USER_FAILURE";
export const SELFENROLL_USER_BEGIN = "SELFENROLL_USER_BEGIN";
export const SELFENROLL_USER_SUCCESS = "SELFENROLL_USER_SUCCESS";
export const SELFENROLL_USER_FAILURE = "SELFENROLL_USER_FAILURE";

// Action creator generator
const createAction = (type: string) => (payload?: any) => ({
    type,
    payload
});

// Action creators
export const clearCourseLoading = createAction(CLEAR_COURSE_LOADING);
export const dataOperationBegin = createAction(COURSE_DATAOPERATION_BEGIN);
export const dataOperationFailure = createAction(COURSE_DATAOPERATION_FAILURE);
export const createCourseBegin = createAction(CREATE_COURSE_BEGIN);
export const createCourseSuccess = createAction(CREATE_COURSE_SUCCESS);
export const createCourseFailure = createAction(CREATE_COURSE_FAILURE);
export const fetchAllCoursesBegin = createAction(FETCH_ALLCOURSES_BEGIN);
export const fetchAllCoursesSuccess = createAction(FETCH_ALLCOURSES_SUCCESS);
export const fetchAllCoursesFailure = createAction(FETCH_ALLCOURSES_FAILURE);
export const fetchCourseEnrollmentsSuccess = createAction(FETCH_COURSEENROLLMENTS_SUCCESS);
export const setCurrentCourseSuccess = createAction(SET_CURRENTCOURSE_SUCCESS);
export const enrollUserBegin = createAction(ENROLL_USER_BEGIN);
export const enrollUserSuccess = createAction(ENROLL_USER_SUCCESS);
export const enrollUserFailure = createAction(ENROLL_USER_FAILURE);
export const unenrollUserBegin = createAction(UNENROLL_USER_BEGIN);
export const unenrollUserSuccess = createAction(UNENROLL_USER_SUCCESS);
export const unenrollUserFailure = createAction(UNENROLL_USER_FAILURE);
export const selfEnrollUserBegin = createAction(SELFENROLL_USER_BEGIN);
export const selfEnrollUserSuccess = createAction(SELFENROLL_USER_SUCCESS);
export const selfEnrollUserFailure = createAction(SELFENROLL_USER_FAILURE);
