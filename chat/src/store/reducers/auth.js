import { ERROR, LOGIN, LOGOUT } from "../actions/auth";

const initialState = {
    token: null,
    userId: null,
    username: null,
    error: null,
    data: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                username: action.username,
                data: action.data,
            }
        case LOGOUT:
        
            return {
                ...state,
                token: action.token,
                userId: action.userId,
                username: action.username,
            }
        case ERROR: 
            return {
                ...state,
                error: action.error
            }
        default: 
            return state
    }
}

export default authReducer;