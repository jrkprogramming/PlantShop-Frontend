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
        navigate('/shipping')
    }

  return (
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">
        
        <h1 className="font-medium leading-tight text-5xl mt-0 mb-2 text-black"> Shopping Cart </h1>

        <h2>Subtotal: ({cartItems.reduce((acc, item) => acc + item.cartQty, 0)}) items</h2> 
        ${cartItems.reduce((acc, item) => acc + item.cartQty * item.price, 0).toFixed(2)}
        <br></br>
        <button type="button" onClick={checkoutHandler} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CHECKOUT</button>

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
                    <br></br>
                    ${item.price}
                    <br></br>
                    <img src={item.image} alt={item.name} className="w-48 h-48"></img>

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

                    <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type='button' onClick={()=> removeFromCartHandler(item.plant)}>REMOVE</button>

                </li>
            ))}
            </div>
        )}
    </div>
  )
}

export default CartPage