import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { plantListReducer, plantDetailsReducer } from './Reducers/plantReducers'
import { cartReducer } from './Reducers/cartReducers'

const reducer = combineReducers({
    plantList: plantListReducer,
    plantDetails: plantDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {cartItems: cartItemsFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store