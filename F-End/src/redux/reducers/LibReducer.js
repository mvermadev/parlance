import { FETCH_LIB } from '../constants/index';

export default function ProfileReducer(state={
    lib:[]
}, action){
    switch(action.type){
        case FETCH_LIB:
            return{
                ...state,
                lib : action.payload
            }

    default:
        return state;
}
}