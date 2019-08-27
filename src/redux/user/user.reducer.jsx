import userAction from './user.type';

const userInitialState = {
    currentUser: null
}
const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case userAction.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.newUser
            }
        default:
            return state
    }
}

export default userReducer;