import { combineReducers, createStore } from "redux";
import authReducer from './authReducer'; 
import ProfileReducer from './ProfileReducer'

// import other reducers
const rootReducer = combineReducers({
    // Key Value map of reducers
    authUser: authReducer,
    info: ProfileReducer

});

//Store
export const store = createStore(rootReducer);

   



export default rootReducer;
