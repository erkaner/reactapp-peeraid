import {
    STUDENTS_DATAOPERATION_BEGIN,
    STUDENTS_DATAOPERATION_FAILURE,
    FETCH_STUDENTS_SUCCESS,
    SEARCH_STUDENTS_SUCCESS,

    FETCH_ALLINSTRUCTORS_BEGIN,
    FETCH_ALLINSTRUCTORS_FAILURE,
    FETCH_ALLINSTRUCTORS_SUCCESS,

    UNLOCK_USER_BEGIN,
    UNLOCK_USER_FAILURE,
    UNLOCK_USER_SUCCESS,

    SEARCH_TOENROLL_BEGIN,
    SEARCH_TOENROLL_FAILURE,
    SEARCH_TOENROLL_SUCCESS,


    DELETE_USER_BEGIN,
    DELETE_USER_FAILURE,
    DELETE_USER_SUCCESS,

    CLEAR_USERS_LOADED,

} from '../_actions/userActions';

const initialState = {
    students: [] as any,
    unassignedStudents: [] as any,
    instructors: [] as any,
    instructorIds: [] as any,
    error: null,
    loading: false,
}

const userReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case STUDENTS_DATAOPERATION_BEGIN || FETCH_ALLINSTRUCTORS_BEGIN || UNLOCK_USER_BEGIN:
            return { ...state, loading: true, error: null };

        case STUDENTS_DATAOPERATION_FAILURE || FETCH_ALLINSTRUCTORS_FAILURE || UNLOCK_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error }

        case FETCH_ALLINSTRUCTORS_SUCCESS:
            return {
                ...state,
                loading: false,
                instructorIds: action.payload.normalizedData.result,
                instructors: action.payload.normalizedData.entities.instructors
            }

        case FETCH_STUDENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                students: action.payload.students,
            }

        case SEARCH_STUDENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                students: action.payload.students,
            }

        case UNLOCK_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                instructors: {
                    ...state.instructors,
                    [action.payload.user.id]: {
                        ...state.instructors[action.payload.user.id],
                        lockoutEnd: action.payload.user.lockoutEnd
                    }
                }                
            }

        ///////////////////////////////////////////////////////////////////////////////
        case SEARCH_TOENROLL_BEGIN:
            return { ...state, loading: true, error: null };
        case SEARCH_TOENROLL_SUCCESS:
            return {
                ...state,
                loading: false,
                students: action.payload.students,
            }
        case  SEARCH_TOENROLL_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        ////////////////////////////////////////////////////////////////////////////////

        ///////////////////////////////////////////////////////////////////////////////
        case DELETE_USER_BEGIN:
            return { ...state, loading: true, error: null };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                instructorIds: state.instructorIds.filter((a: any) => a !== action.payload.userId),
                students: { ...state.students, [action.payload.userId]: null },
                instructors: { ...state.instructors, [action.payload.userId]: null }
            }
        case DELETE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload.error }
        ////////////////////////////////////////////////////////////////////////////////

       
        case CLEAR_USERS_LOADED:
            return {
                ...state,
                loading: false,
                students: [],
            } 
        default:
            return state;
    }
}

export default userReducer;