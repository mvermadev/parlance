import { combineReducers, createStore } from "redux";
import authReducer from './authReducer'; 
import ProfileReducer from './ProfileReducer'
import LibReducer from './LibReducer';

// import other reducers
const rootReducer = combineReducers({
    // Key Value map of reducers
    authUser: authReducer,
    info: ProfileReducer,
    lib: LibReducer

});

//Store
export const store = createStore(rootReducer);

   



export default rootReducer;
