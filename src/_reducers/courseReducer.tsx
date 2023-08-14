import {
    FETCH_ALLCOURSES_BEGIN,
    FETCH_ALLCOURSES_SUCCESS,
    FETCH_ALLCOURSES_FAILURE,

    COURSE_DATAOPERATION_BEGIN,
    COURSE_DATAOPERATION_FAILURE,

    FETCH_COURSEENROLLMENTS_SUCCESS,
    SET_CURRENTCOURSE_SUCCESS,

    CREATE_COURSE_BEGIN,
    CREATE_COURSE_FAILURE,
    CREATE_COURSE_SUCCESS,

    CLEAR_COURSE_LOADING,

    ENROLL_USER_BEGIN,
    ENROLL_USER_SUCCESS,
    ENROLL_USER_FAILURE,

    UNENROLL_USER_BEGIN,
    UNENROLL_USER_SUCCESS,
    UNENROLL_USER_FAILURE,

    SELFENROLL_USER_BEGIN,
    SELFENROLL_USER_FAILURE,
    SELFENROLL_USER_SUCCESS
} from '../_actions/courseActions';

interface Course {
    id: number;
    // Define other properties of the course here
}

interface CourseEnrollment {
    studentId: number;
    student: any; // Define the type of 'student' property
    courseId: number;
    // Define other properties of the course enrollment here
}

interface State {
    courseIds: number[];
    courses: { [key: number]: Course };
    courseEnrollments: CourseEnrollment[];
    currentCourseId: number | null;
    loading: boolean;
    error: any; // Define the type of 'error' property
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: State = {
    courseIds: [],
    courses: {},
    courseEnrollments: [],
    currentCourseId: null,
    loading: false,
    error: null
};

const courseReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case CLEAR_COURSE_LOADING:
            return { ...state, loading: false, error: null };

        case COURSE_DATAOPERATION_BEGIN:
        case CREATE_COURSE_BEGIN:
            return { ...state, loading: true, error: null };

        case CREATE_COURSE_SUCCESS: {
            const newCourse = action.payload.course as Course;
            return {
                ...state,
                loading: false,
                error: null,
                courseIds: [...state.courseIds, newCourse.id],
                courses: {
                    ...state.courses,
                    [newCourse.id]: newCourse
                }
            };
        }

        case CREATE_COURSE_FAILURE:
        case COURSE_DATAOPERATION_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        case FETCH_ALLCOURSES_BEGIN:
            return { ...state, loading: true, error: null };

        case FETCH_ALLCOURSES_SUCCESS: {
            const normalizedData = action.payload.normalizedData;
            return {
                ...state,
                loading: false,
                error: null,
                courses: normalizedData.entities.courses,
                courseIds: normalizedData.result
            };
        }

        case FETCH_ALLCOURSES_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        case FETCH_COURSEENROLLMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                courseEnrollments: action.payload.courseEnrollments
            };

        case SET_CURRENTCOURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                currentCourseId: action.payload.currentCourseId
            };

        case ENROLL_USER_BEGIN:
            return { ...state, loading: true, error: null };

        case ENROLL_USER_SUCCESS: {
            const { student, courseId } = action.payload;
            return {
                ...state,
                loading: false,
                courseEnrollments: student === null
                    ? state.courseEnrollments
                    : [
                        ...state.courseEnrollments,
                        {
                            studentId: student.id,
                            student,
                            courseId
                        }
                    ]
            };
        }

        case ENROLL_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        case UNENROLL_USER_BEGIN:
            return { ...state, loading: true, error: null };

        case UNENROLL_USER_SUCCESS: {
            const studentId = action.payload.studentId;
            return {
                ...state,
                loading: false,
                courseEnrollments: state.courseEnrollments.filter(
                    e => e.studentId !== studentId
                )
            };
        }

        case UNENROLL_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        case SELFENROLL_USER_BEGIN:
            return { ...state, loading: true, error: null };

        case SELFENROLL_USER_SUCCESS: {
            const newCourse = action.payload.course as Course;
            return {
                ...state,
                loading: false,
                error: null,
                courseIds: [...state.courseIds, newCourse.id],
                courses: {
                    ...state.courses,
                    [newCourse.id]: newCourse
                }
            };
        }

        case SELFENROLL_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error };

        default:
            return state;
    }
};

export default courseReducer;
