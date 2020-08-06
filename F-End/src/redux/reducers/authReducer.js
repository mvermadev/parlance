import {SET_AUTH_TOKEN} from '../constants/index';

export default function authReducer(state={
    authUser : null,
    isAuthenticated:false
}, action){
    switch(action.type){
        case SET_AUTH_TOKEN:
            return{
                ...state,
                isAuthenticated:true,
                authUser : action.payload.auth
            }

    default:
        return state;
}
}
