import { combineReducers } from "redux";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer";


const rootReducer = combineReducers({

    userReducer,
    courseReducer,

});

export default rootReducer;

