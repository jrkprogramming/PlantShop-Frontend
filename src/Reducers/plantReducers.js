
export const plantListReducer = (state = {plants:[]}, action) => {
    switch (action.type) {

        case 'PLANT_LIST':
            return {plants:action.payload}

        default:
            return state
    }
}

export const plantDetailsReducer = (state = {plant:[]}, action) => {
    switch (action.type) {

        case 'PLANT_DETAILS':
            return {plant:action.payload}

        default:
            return state
    }
}