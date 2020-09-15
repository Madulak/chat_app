import Axios from "axios";

export const CREATE_POST = 'CREATE_POST';

const urlCreatePost = 'http://localhost:8080/createpost';

export const create_post = (postData) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        console.log(postData);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer '+token
            }
        }
        let response;
        try {
            response = await Axios.post(urlCreatePost, postData, config)
            console.log(response);
        } catch (error) {
            console.log(error);
        }

        dispatch({type: CREATE_POST})
    }
}