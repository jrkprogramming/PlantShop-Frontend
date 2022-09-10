export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {

        case 'USER_LOGIN':
            return {userInfo: action.payload}

        case 'USER_LOGOUT':
            return {}

        default:
            return state
    }
}

export const userSignupReducer = (state = {}, action) => {
    switch (action.type) {

        case 'USER_SIGNUP':
            return {userInfo: action.payload}

        case 'USER_LOGOUT':
            return {}

        default:
            return state
    }
}


export const userDetailsReducer = (state = {user:{}}, action) => {
    switch (action.type) {

        case 'USER_DETAILS':
            return {user: action.payload}

        default:
            return state
    }
}