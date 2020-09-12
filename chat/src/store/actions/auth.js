import Axios from "axios";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

const urlSignup = 'http://localhost:8080/signup';
const urlLogin = 'http://localhost:8080/login';

export const signup = (signupData) => {
    return async dispatch => {
        console.log(signupData);
        let response;
        try {
            response = await Axios.post(urlSignup, signupData);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }

        dispatch({ type: SIGNUP })
    }
}

export const login = (loginData) => {
    return async dispatch => {
        let response;
        try {
            response = await Axios.post(urlLogin, loginData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type: LOGIN, token: response.data.token, userId: response.data.userId, username: response.data.username })
    }
}