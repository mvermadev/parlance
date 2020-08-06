import {SET_CHAT_USER, SET_ROOMS} from '../constants/index'

export default function chatReducer(state={
    currentUser : null,
    rooms:null
}, action){
    switch(action.type){
        case SET_CHAT_USER:
            return{
                ...state,
                currentUser : action.payload
            }
        case SET_ROOMS:
            return{
                ...state,
                rooms:action.payload
            }
    default:
        return state;
}
}
