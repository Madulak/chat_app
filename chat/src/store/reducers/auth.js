import { LOGIN } from "../actions/auth";

const initialState = {
    token: null,
    userId: null,
    username: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                token: action.token,
                userId: action.userId,
                username: action.username
            }
        default: 
            return state
    }
}

export default authReducer;