

export const orderCreateReducer = (state={}, action) => {
    switch(action.type) {
        case 'ORDER_CREATE':
            return {
                success: true,
                order: action.payload
            }

        case 'ORDER_RESET':
            return {}

        
        default:
            return state
    }
}

export const orderDetailReducer = (state={loading: true, orderItems:[], shippingAddress:{}}, action) => {
    switch(action.type) {
        case 'ORDER_DETAIL':
            return {
                loading:false, 
                order: action.payload
            }

        default:
            return state
    }
}