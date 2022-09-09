import React, {useEffect} from 'react'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../Actions/cartActions'

const CartPage = ({match, history}) => {

    let location = useLocation()
    let {id} = useParams()
    let navigate = useNavigate()

    const productId = id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    console.log('qty:', qty)
    console.log(productId)

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log('cartItems', cartItems)

    useEffect(()=> {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
        // Adds products to localstorage
        // quantity is totalQuantity
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        navigate('/login?redirect=shipping')
    }

  return (
    <div>
        
        <h1> Shopping Cart </h1>

        <h2>Subtotal: ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2> 
        ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
        <br></br>
        <button type="button" onClick={checkoutHandler}>CHECKOUT</button>

        <br></br><br></br><br></br>


        {cartItems.length === 0 ? (
            <div>
            <h3>There is currently nothing in your cart!</h3>
            <Link to='/products'>Go Back</Link>
            </div>
        ): (
            <div>
            {cartItems.map(item => (
                <li key={item.product}>

                    <img src={item.image} alt={item.name}></img>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                    ${item.price}

                    <form value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                        <select>
                        {
                            [...Array(item.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                            ))
                        }
                        </select>
                    </form>

                    <button type='button' onClick={()=> removeFromCartHandler(item.product)}>REMOVE</button>

                </li>
            ))}
            </div>
        )}

    </div>
  )
}

export default CartPage