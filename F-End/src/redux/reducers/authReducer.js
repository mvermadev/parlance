import {SET_AUTH_TOKEN} from '../constants/index';

export default function authReducer(state={
    data: {}
}, action){
    switch(action.type){
        case SET_AUTH_TOKEN:
            return{
                ...state,
                data : action.payload
            }

    default:
        return state;
}
}



