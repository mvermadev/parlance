import axios from 'axios'

// All compo for server request will comes here.

export const userRegister = newUser=>{

    var raw = JSON.stringify({
        "username": newUser.username,
        "password": newUser.password,
        "password2": newUser.password2,
        "name": newUser.name
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch("https://recmonk.herokuapp.com/register", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
