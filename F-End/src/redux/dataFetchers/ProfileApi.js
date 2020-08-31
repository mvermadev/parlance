import Swal from 'sweetalert2'
import { ADD_PROFILE } from '../constants/index'

export const fetchProfile = () => (dispatch) => {

      var myHeaders = ({
        'authorization': localStorage.token,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    });

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    return fetch("https://recmonk.herokuapp.com/current", requestOptions)
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
        .then(data => dispatch(addProfile(data)))
        .catch(error => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message
          }));

}

export const addProfile = (data) => ({
    type: ADD_PROFILE,
    payload: data
});