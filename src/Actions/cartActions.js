import axios from "axios";
import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../Constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/plants/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            plant:data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            quantity: data.quantity,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id, 
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}