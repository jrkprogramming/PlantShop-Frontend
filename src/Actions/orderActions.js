import axios from 'axios';

export const orderCreate = (order) => async (dispatch, getState) => {

    const { 
        userLogin: {userInfo}
    } = getState()


    const config = {
        headers:{
            'Content-type' : 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }

    const {data} = await axios.post(
        `/orders/add/`,
        order,
        config
        )
        
    dispatch({
        type: 'ORDER_CREATE',
        payload: data
    })

    dispatch({
        type: 'CART_CLEAR',
        payload: data
    })

    localStorage.removeItem('cartItems')
}


export const getOrderDetails = (id) => async (dispatch, getState) => {

    const { 
        userLogin: {userInfo}
    } = getState()


    const config = {
        headers:{
            'Content-type' : 'application/json',
            Authorization: `Bearer ${userInfo.token}`
        }
    }

    const {data} = await axios.get(
        `/orders/${id}/`,
        config
        )
        
    dispatch({
        type: 'ORDER_DETAIL',
        payload: data
    })
}



