import { ADD_PROFILE } from '../constants/index';

export default function ProfileReducer(state={
    info:{}
}, action){
    switch(action.type){
        case ADD_PROFILE:
            return{
                ...state,
                info : action.payload
            }

    default:
        return state;
}
}