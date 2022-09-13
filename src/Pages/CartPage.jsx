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
        
        <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-neutral-100"> Shopping Cart </h1>

        <h2 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Subtotal: ({cartItems.reduce((acc, item) => acc + item.cartQty, 0)}) items <br></br><br></br> 
        ${cartItems.reduce((acc, item) => acc + item.cartQty * item.price, 0).toFixed(2)}</h2>
        <br></br>
        <br></br>
        <button type="button" onClick={checkoutHandler} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-500 dark:hover:bg-stone-400  dark:focus:ring-blue-800">PROCEED TO CHECKOUT</button>

        {/* Should have radio buttons here to see if its delivery / pickup */}

        <br></br><br></br><br></br>

        {cartItems.length === 0 ? (
            <div>
            <h3 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">There is currently nothing in your cart!</h3>
            <Link to='/plants'>Go Back</Link>
            </div>
        ): (
            <div>
            {cartItems.map(item => (
                <div key={item.plant}>
                    <br></br><br></br>
                    <hr/>
                    <br></br>

                    <h5 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100"><Link to={`/plants/${item.plant}`}>{item.name}</Link>
                    <br></br>
                    {item.cartQty} x ${item.price} = ${(item.price * item.cartQty).toFixed(2)}</h5>
                    <br></br>
                    <form className="flex inline-flex" onChange={(e) => dispatch(addToCart(item.plant, Number(e.target.value)))}>
                        <select value={item.cartQty} class="form-select appearance-none
                                    block
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding bg-no-repeat
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        {
                            [...Array(item.quantity).keys()].map((x) => (
                                <option key={x+1} value={x+1}>
                                    {x+1}
                                </option>
                            ))
                        }
                        </select>
                    </form>

                    <br></br>
                    <br></br>
                    <img src={item.image} alt={item.name} className="w-[40%] h-[48%]"></img>


                    <button class="mt-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-red-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" type='button' onClick={()=> removeFromCartHandler(item.plant)}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>REMOVE</button>

                </div>
            ))}
            </div>
        )}
    </div>
  )
}

export default CartPage