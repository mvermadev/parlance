import Swal from 'sweetalert2'
import { ADD_PROFILE } from '../constants/index'

const Logout=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = "/";
}

export const fetchProfile = () => (dispatch) => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", localStorage.token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":localStorage.username});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch("https://recmonk.herokuapp.com/profile", requestOptions)
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error("Error " + response.status + ": " + response.statusText);
                if(response.status == 401)
                    Logout();
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
            dispatch(addProfile(data))
        })
        .catch(error => console.log(error.message));

}

export const addProfile = (data) => ({
    type: ADD_PROFILE,
    payload: data
});