const { GET_ALL_POSTS, GET_PHOTOS, GET_VIDEOS } = require("../actions/postActions")

const initialState = {
    posts: [],
    photos: [],
    videos: [],
}

const postReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_PHOTOS: 
            return {
                ...state,
                photos: action.photos,
            }
        case GET_VIDEOS:
            return {
                ...state,
                videos: action.videos,
            }
        
        default: 
            return state
    }
}

export default postReducer;