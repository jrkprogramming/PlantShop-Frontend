

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

// export const orderDetailReducer = (state = {orderItems: [], shippingAddress:{}}, action) => {
//     switch(action.type) {

//         case 'ORDER_DETAILS':
//             return {order: action.payload}

//         default:
//             return state
//     }
// }