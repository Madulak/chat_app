const { GET_ALL_USERS } = require("../actions/profileActions")

const initialState = {
    users: [],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export default profileReducer;

