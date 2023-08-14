"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userActions_1 = require("../_actions/userActions");
const initialState = {
    students: [],
    unassignedStudents: [],
    instructors: [],
    instructorIds: [],
    error: null,
    loading: false,
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userActions_1.STUDENTS_DATAOPERATION_BEGIN || userActions_1.FETCH_ALLINSTRUCTORS_BEGIN || userActions_1.UNLOCK_USER_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case userActions_1.STUDENTS_DATAOPERATION_FAILURE || userActions_1.FETCH_ALLINSTRUCTORS_FAILURE || userActions_1.UNLOCK_USER_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        case userActions_1.FETCH_ALLINSTRUCTORS_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, instructorIds: action.payload.normalizedData.result, instructors: action.payload.normalizedData.entities.instructors });
        case userActions_1.FETCH_STUDENTS_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, students: action.payload.students });
        case userActions_1.SEARCH_STUDENTS_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, students: action.payload.students });
        case userActions_1.UNLOCK_USER_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, instructors: Object.assign(Object.assign({}, state.instructors), { [action.payload.user.id]: Object.assign(Object.assign({}, state.instructors[action.payload.user.id]), { lockoutEnd: action.payload.user.lockoutEnd }) }) });
        ///////////////////////////////////////////////////////////////////////////////
        case userActions_1.SEARCH_TOENROLL_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case userActions_1.SEARCH_TOENROLL_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, students: action.payload.students });
        case userActions_1.SEARCH_TOENROLL_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        ////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////
        case userActions_1.DELETE_USER_BEGIN:
            return Object.assign(Object.assign({}, state), { loading: true, error: null });
        case userActions_1.DELETE_USER_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: false, instructorIds: state.instructorIds.filter((a) => a !== action.payload.userId), students: Object.assign(Object.assign({}, state.students), { [action.payload.userId]: null }), instructors: Object.assign(Object.assign({}, state.instructors), { [action.payload.userId]: null }) });
        case userActions_1.DELETE_USER_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: false, error: action.payload.error });
        ////////////////////////////////////////////////////////////////////////////////
        case userActions_1.CLEAR_USERS_LOADED:
            return Object.assign(Object.assign({}, state), { loading: false, students: [] });
        default:
            return state;
    }
};
exports.default = userReducer;
