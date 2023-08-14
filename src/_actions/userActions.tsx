

export const STUDENTS_DATAOPERATION_BEGIN = "STUDENTS_DATAOPERATION_BEGIN";
export const studentsDataOperationBegin = () => ({
    type: STUDENTS_DATAOPERATION_BEGIN
})

export const STUDENTS_DATAOPERATION_FAILURE = "STUDENTS_DATAOPERATION_FAILURE";
export const studentsDataOperationFailure = (error: any) => ({
    type: STUDENTS_DATAOPERATION_FAILURE,
    payload: { error }
})

export const FETCH_STUDENTS_SUCCESS = "FETCH_STUDENTS_SUCCESS";
export const fetchStudentsSuccess = (students:any) => ({
    type: FETCH_STUDENTS_SUCCESS,
    payload: { students }
})

export const SEARCH_STUDENTS_SUCCESS = "SEARCH_STUDENTS_SUCCESS";
export const searchStudentsSuccess = (students:any) => ({
    type: SEARCH_STUDENTS_SUCCESS,
    payload: { students }
})

///////////////////////////////////////////////////////////////////
export const FETCH_ALLINSTRUCTORS_BEGIN = "FETCH_ALLINSTRUCTORS_BEGIN";
export const fetchAllInstructorsBegin = () => ({
    type: FETCH_ALLINSTRUCTORS_BEGIN
})

export const FETCH_ALLINSTRUCTORS_SUCCESS = "FETCH_ALLINSTRUCTORS_SUCCESS";
export const fetchAllInstructorsSuccess = (normalizedData: any) => ({
    type: FETCH_ALLINSTRUCTORS_SUCCESS,
    payload: { normalizedData }
})

export const FETCH_ALLINSTRUCTORS_FAILURE = "FETCH_ALLINSTRUCTORS_FAILURE";
export const fetchAllInstructorsFailure = (error: any) => ({
    type: FETCH_ALLINSTRUCTORS_FAILURE,
    payload: { error }
})
//////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
export const UNLOCK_USER_BEGIN = "UNLOCK_USER_BEGIN";
export const unlockUserBegin = () => ({
    type: UNLOCK_USER_BEGIN
})

export const UNLOCK_USER_SUCCESS = "UNLOCK_USER_SUCCESS";
export const unlockUserSuccess = (user: any) => ({
    type: UNLOCK_USER_SUCCESS,
    payload: { user }
})

export const UNLOCK_USER_FAILURE = "UNLOCK_USER_FAILURE";
export const unlockUserFailure = (error: any) => ({
    type: UNLOCK_USER_FAILURE,
    payload: { error }
})
//////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
export const SEARCH_TOENROLL_BEGIN = "SEARCH_TOENROLL_BEGIN";
export const searchToEnrollUserBegin = () => ({
    type: SEARCH_TOENROLL_BEGIN
})

export const SEARCH_TOENROLL_SUCCESS = "SEARCH_TOENROLL_SUCCESS";
export const searchToEnrollUserSuccess = (user: any) => ({
    type: SEARCH_TOENROLL_SUCCESS,
    payload: { user }
})

export const SEARCH_TOENROLL_FAILURE = "SEARCH_TOENROLL_FAILURE";
export const searchToEnrollUserFailure = (error: any) => ({
    type: SEARCH_TOENROLL_FAILURE,
    payload: { error }
})
//////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
export const DELETE_USER_BEGIN = "DELETE_USER_BEGIN";
export const deleteUserBegin = () => ({
    type: DELETE_USER_BEGIN
})

export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const deleteUserSuccess = (userId: any) => ({
    type: DELETE_USER_SUCCESS,
    payload: { userId }
})

export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";
export const deleteUserFailure = (error: any) => ({
    type: DELETE_USER_FAILURE,
    payload: { error }
})
//////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////
export const CLEAR_USERS_LOADED = "CLEAR_USERS_LOADED";
export const clearUsersLoaded = () => ({
    type: CLEAR_USERS_LOADED
    
})

//////////////////////////////////////////////////////////////////