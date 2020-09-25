import Axios from "axios";

export const CREATE_POST = 'CREATE_POST';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const POST_LIKE = 'POST_LIKE';
export const GET_PHOTOS = 'GET_PHOTOS';
export const GET_VIDEOS = 'GET_VIDEOS';

const urlCreatePost = 'http://localhost:8080/createpost';
const urlGetAllPosts = 'http://localhost:8080/posts';
const urlPostLike = 'http://localhost:8080/like/';
const urlPhotos = 'http://localhost:8080/photos';
const urlVideos = 'http://localhost:8080/videos'

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

export const get_all_posts = () => {
    return async dispatch => {

        let response;
        try {
            response = await Axios.get(urlGetAllPosts);
            console.log(response);
            dispatch({ type: GET_ALL_POSTS, posts: response.data.data })
        } catch (error) {
            console.log(error);
        } 
    }
}

export const post_like = (postId) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const config = {
            headers: {
                Authorization: 'Bearer '+token
            }
        }
        let response;
        try {
            response = await Axios.post(urlPostLike+postId,{hello: 'hello'} ,config);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        dispatch({type: POST_LIKE})
    }
}

export const get_photos = () => {
    return async dispatch => {
        let response;
        try {
            response = await Axios.get(urlPhotos);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        dispatch({type: GET_PHOTOS, photos: response.data.data })
    }
}

export const get_videos = () => {
    return async dispatch => {
        let response;
        try {
            response = await Axios.get(urlVideos);
            console.log(response);
        } catch (error) {
            console.log(error);
            throw error;
        }

        dispatch({type: GET_VIDEOS, videos: response.data.data })
    }
}