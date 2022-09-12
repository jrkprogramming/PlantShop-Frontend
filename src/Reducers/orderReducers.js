

export const orderCreateReducer = (state={}, action) => {
    switch(action.type) {
        case 'ORDER_CREATE':
            return {
                success: true,
                order: action.payload
            }
        default:
            return state
    }
}