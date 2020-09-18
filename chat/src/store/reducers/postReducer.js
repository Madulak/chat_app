const { GET_ALL_POSTS } = require("../actions/postActions")

const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        
        default: 
            return state
    }
}

export default postReducer;