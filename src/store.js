import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { plantListReducer, plantDetailsReducer } from './Reducers/plantReducers'
import { cartReducer } from './Reducers/cartReducers'
import {userLoginReducer, userSignupReducer, userDetailsReducer} from './Reducers/userReducers'

const reducer = combineReducers({
    plantList: plantListReducer,
    plantDetails: plantDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
    userDetails: userDetailsReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: {cartItems: cartItemsFromStorage},
    userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store