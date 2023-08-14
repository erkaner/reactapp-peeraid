"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearUsersLoaded = exports.CLEAR_USERS_LOADED = exports.deleteUserFailure = exports.DELETE_USER_FAILURE = exports.deleteUserSuccess = exports.DELETE_USER_SUCCESS = exports.deleteUserBegin = exports.DELETE_USER_BEGIN = exports.searchToEnrollUserFailure = exports.SEARCH_TOENROLL_FAILURE = exports.searchToEnrollUserSuccess = exports.SEARCH_TOENROLL_SUCCESS = exports.searchToEnrollUserBegin = exports.SEARCH_TOENROLL_BEGIN = exports.unlockUserFailure = exports.UNLOCK_USER_FAILURE = exports.unlockUserSuccess = exports.UNLOCK_USER_SUCCESS = exports.unlockUserBegin = exports.UNLOCK_USER_BEGIN = exports.fetchAllInstructorsFailure = exports.FETCH_ALLINSTRUCTORS_FAILURE = exports.fetchAllInstructorsSuccess = exports.FETCH_ALLINSTRUCTORS_SUCCESS = exports.fetchAllInstructorsBegin = exports.FETCH_ALLINSTRUCTORS_BEGIN = exports.searchStudentsSuccess = exports.SEARCH_STUDENTS_SUCCESS = exports.fetchStudentsSuccess = exports.FETCH_STUDENTS_SUCCESS = exports.studentsDataOperationFailure = exports.STUDENTS_DATAOPERATION_FAILURE = exports.studentsDataOperationBegin = exports.STUDENTS_DATAOPERATION_BEGIN = void 0;
exports.STUDENTS_DATAOPERATION_BEGIN = "STUDENTS_DATAOPERATION_BEGIN";
const studentsDataOperationBegin = () => ({
    type: exports.STUDENTS_DATAOPERATION_BEGIN
});
exports.studentsDataOperationBegin = studentsDataOperationBegin;
exports.STUDENTS_DATAOPERATION_FAILURE = "STUDENTS_DATAOPERATION_FAILURE";
const studentsDataOperationFailure = (error) => ({
    type: exports.STUDENTS_DATAOPERATION_FAILURE,
    payload: { error }
});
exports.studentsDataOperationFailure = studentsDataOperationFailure;
exports.FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
const fetchStudentsSuccess = (students) => ({
    type: exports.FETCH_STUDENTS_SUCCESS,
    payload: { students }
});
exports.fetchStudentsSuccess = fetchStudentsSuccess;
exports.SEARCH_STUDENTS_SUCCESS = "SEARCH_STUDENTS_SUCCESS";
const searchStudentsSuccess = (students) => ({
    type: exports.SEARCH_STUDENTS_SUCCESS,
    payload: { students }
});
exports.searchStudentsSuccess = searchStudentsSuccess;
///////////////////////////////////////////////////////////////////
exports.FETCH_ALLINSTRUCTORS_BEGIN = "FETCH_ALLINSTRUCTORS_BEGIN";
const fetchAllInstructorsBegin = () => ({
    type: exports.FETCH_ALLINSTRUCTORS_BEGIN
});
exports.fetchAllInstructorsBegin = fetchAllInstructorsBegin;
exports.FETCH_ALLINSTRUCTORS_SUCCESS = "FETCH_ALLINSTRUCTORS_SUCCESS";
const fetchAllInstructorsSuccess = (normalizedData) => ({
    type: exports.FETCH_ALLINSTRUCTORS_SUCCESS,
    payload: { normalizedData }
});
exports.fetchAllInstructorsSuccess = fetchAllInstructorsSuccess;
exports.FETCH_ALLINSTRUCTORS_FAILURE = "FETCH_ALLINSTRUCTORS_FAILURE";
const fetchAllInstructorsFailure = (error) => ({
    type: exports.FETCH_ALLINSTRUCTORS_FAILURE,
    payload: { error }
});
exports.fetchAllInstructorsFailure = fetchAllInstructorsFailure;
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
exports.UNLOCK_USER_BEGIN = "UNLOCK_USER_BEGIN";
const unlockUserBegin = () => ({
    type: exports.UNLOCK_USER_BEGIN
});
exports.unlockUserBegin = unlockUserBegin;
exports.UNLOCK_USER_SUCCESS = "UNLOCK_USER_SUCCESS";
const unlockUserSuccess = (user) => ({
    type: exports.UNLOCK_USER_SUCCESS,
    payload: { user }
});
exports.unlockUserSuccess = unlockUserSuccess;
exports.UNLOCK_USER_FAILURE = "UNLOCK_USER_FAILURE";
const unlockUserFailure = (error) => ({
    type: exports.UNLOCK_USER_FAILURE,
    payload: { error }
});
exports.unlockUserFailure = unlockUserFailure;
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
exports.SEARCH_TOENROLL_BEGIN = "SEARCH_TOENROLL_BEGIN";
const searchToEnrollUserBegin = () => ({
    type: exports.SEARCH_TOENROLL_BEGIN
});
exports.searchToEnrollUserBegin = searchToEnrollUserBegin;
exports.SEARCH_TOENROLL_SUCCESS = "SEARCH_TOENROLL_SUCCESS";
const searchToEnrollUserSuccess = (user) => ({
    type: exports.SEARCH_TOENROLL_SUCCESS,
    payload: { user }
});
exports.searchToEnrollUserSuccess = searchToEnrollUserSuccess;
exports.SEARCH_TOENROLL_FAILURE = "SEARCH_TOENROLL_FAILURE";
const searchToEnrollUserFailure = (error) => ({
    type: exports.SEARCH_TOENROLL_FAILURE,
    payload: { error }
});
exports.searchToEnrollUserFailure = searchToEnrollUserFailure;
//////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
exports.DELETE_USER_BEGIN = "DELETE_USER_BEGIN";
const deleteUserBegin = () => ({
    type: exports.DELETE_USER_BEGIN
});
exports.deleteUserBegin = deleteUserBegin;
exports.DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
const deleteUserSuccess = (userId) => ({
    type: exports.DELETE_USER_SUCCESS,
    payload: { userId }
});
exports.deleteUserSuccess = deleteUserSuccess;
exports.DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
const deleteUserFailure = (error) => ({
    type: exports.DELETE_USER_FAILURE,
    payload: { error }
});
exports.deleteUserFailure = deleteUserFailure;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
exports.CLEAR_USERS_LOADED = "CLEAR_USERS_LOADED";
const clearUsersLoaded = () => ({
    type: exports.CLEAR_USERS_LOADED
});
exports.clearUsersLoaded = clearUsersLoaded;
//////////////////////////////////////////////////////////////////
