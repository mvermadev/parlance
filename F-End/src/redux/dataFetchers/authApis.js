import axios from "axios";
export default {
    postAuthData: function postData(data) {
        // POST API request to clone an existing project
        var requestURL = "api endpoint";
        return dispatch => {
            axios
                .put(requestURL, data, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    dispatch({
                        type: SET_AUTH_TOKEN,
                        payload: response.data.payload
                    });
                })
                .catch(error => {
                    dispatch({
                        type: API_ERROR_INDIVIDUAL_PROJECT_LEVEL,
                        payload: "Error occured while posting data. Please try again."
                    });
                });
        };
    }
}