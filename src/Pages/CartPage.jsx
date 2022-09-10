import React, {useEffect} from 'react'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../Actions/cartActions'

const CartPage = () => {

    let {id} = useParams()
    let location = useLocation()
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const plantId = id
    const cartQty = location.search ? Number(location.search.split('=')[1]) : 1

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(()=> {
        if (plantId) {
            dispatch(addToCart(plantId, cartQty))
        }
        // Adds plants to localstorage
        // quantity is totalQuantity, cartQty is how many in the cart
    }, [dispatch, plantId, cartQty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }

  return (
    <div>
        
        <h1> Shopping Cart </h1>

        <h2>Subtotal: ({cartItems.reduce((acc, item) => acc + item.cartQty, 0)}) items</h2> 
        ${cartItems.reduce((acc, item) => acc + item.cartQty * item.price, 0).toFixed(2)}
        <br></br>
        <button type="button" onClick={checkoutHandler}>CHECKOUT</button>

        <br></br><br></br><br></br>

        {cartItems.length === 0 ? (
            <div>
            <h3>There is currently nothing in your cart!</h3>
            <Link to='/plants'>Go Back</Link>
            </div>
        ): (
            <div>
            {cartItems.map(item => (
                <li key={item.plant}>

                    <Link to={`/plants/${item.plant}`}>{item.name}</Link>
                    ${item.price}
                    <br></br>
                    <img src={item.image} alt={item.name}></img>

                    <form onChange={(e) => dispatch(addToCart(item.plant, Number(e.target.value)))}>
                        <select value={item.cartQty}>
                        {
                            [...Array(item.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                            ))
                        }
                        </select>
                    </form>

                    <button type='button' onClick={()=> removeFromCartHandler(item.plant)}>REMOVE</button>

                </li>
            ))}
            </div>
        )}
    </div>
  )
}

export default CartPage