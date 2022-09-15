

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

export const orderPaidReducer = (state = {}, action) => {
    switch(action.type) {

        case 'ORDER_PAID':
            return {success: true}

        case 'ORDER_RESET':
            return {}

        default:
            return state
    }
}

export const listOrdersReducer = (state = {orders:[]}, action) => {
    switch(action.type) {

        case 'ORDER_LIST':
            return {orders: action.payload}

        case 'ORDER_RESET':
            return {orders: []}

        default:
            return state
    }
}