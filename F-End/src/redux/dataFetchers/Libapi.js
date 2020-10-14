import { FETCH_LIB } from '../constants/index'

export const fetchLibrary = () => (dispatch) => {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://recmonk.herokuapp.com/library", requestOptions)
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(data => {
            dispatch(addLibrary(data))
        })
        .catch(error => console.log(error.message));

}

export const addLibrary = (data) => ({
    type: FETCH_LIB,
    payload: data
});