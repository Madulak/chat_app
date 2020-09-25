import Axios from "axios";

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
export const LOGOUT = 'LOGOUT';

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
            const expirationDate = new Date(new Date().getTime());
            console.log(expirationDate);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', response.data.userId);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('data', response.data);

            dispatch({ type: LOGIN, token: response.data.token, userId: response.data.userId, username: response.data.username, data: response.data })
        } catch (error) {
            console.log(error);
            dispatch({type: ERROR, error: error})
            throw error;
        }

    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('data');
    return dispatch => {
        dispatch({type: LOGOUT, userId: null, username: null, token: null})
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                const userId = localStorage.getItem('userId');
                const token = localStorage.getItem('token');
                const username = localStorage.getItem('username');
                const data = localStorage.getItem('data');
                dispatch({ type: LOGIN, token: token, userId: userId, username: username, data: data })
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};