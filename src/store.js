import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { plantListReducer, plantDetailsReducer, plantDeleteReducer } from './Reducers/plantReducers'
import { cartReducer } from './Reducers/cartReducers'
import {userLoginReducer, userSignupReducer, userDetailsReducer, userEditReducer, userListReducer} from './Reducers/userReducers'
import {orderCreateReducer} from './Reducers/orderReducers'
 
const reducer = combineReducers({
    plantList: plantListReducer,
    plantDetails: plantDetailsReducer,
    plantDelete: plantDeleteReducer,

    cart: cartReducer,
    createOrder: orderCreateReducer,

    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    userDetails: userDetailsReducer,
    userEdit: userEditReducer,
    userList: userListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
    cart: {cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage},
    userLogin: {userInfo: userInfoFromStorage},
}
 
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store