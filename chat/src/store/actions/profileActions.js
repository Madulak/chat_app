import { GET_ALL_POSTS } from "./postActions";
import Axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';

const urlGetallusers = 'http://localhost:8080/getusers';

export const get_all_users = () => {
    return async dispatch => {

        let response;
        try {
            response = await Axios.get(urlGetallusers);
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({ type : GET_ALL_USERS, users: response.data.data })
    }
}