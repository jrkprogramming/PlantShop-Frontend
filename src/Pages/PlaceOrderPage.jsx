import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {orderCreate} from '../Actions/orderActions'
 
const PlaceOrderPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createOrder = useSelector(state => state.createOrder)
    const {order, error, success} = createOrder

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.cartQty, 0)

    /// Shipping Price is also Delivery Charge
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)

    cart.taxPrice = Number((0.075) * cart.itemsPrice).toFixed(2)

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    if(!cart.paymentMethod) {
        navigate('/payment')
    }


    useEffect(() => {
        if(success){
            navigate(`/orders/${order.id}`)
            // dispatch({type: 'ORDER_RESET'})
        }
    }, [success, navigate])

    
    const placeOrder = () => {
        console.log(cart.cartItems)
        dispatch(orderCreate({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }

  return (
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">
        
        <h1 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Review Order</h1>

        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
        Shipping Address: {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.state}, {cart.shippingAddress.zipcode}
        </div>



        
        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
        Payment Method: {cart.paymentMethod}
        </div>

        <br></br><br></br><br></br>

        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
            <h2 >Order Items</h2>
            {cart.cartItems.length === 0 ? 'There are no plants in your cart!' : cart.cartItems.map((item, index) => {
                return <div>
                    <img src={item.image} alt={item.name}></img>
                    <Link to={`/plants/${item.plant}`}>{item.name}</Link>
                    <br></br>
                    {item.cartQty} x ${item.price} = ${(item.cartQty * item.price).toFixed(2)}
                    <br></br><br></br>
                </div>
            })}
        </div>

        <div>

            <h3 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Order Summary
            Subtotal: 
            ${(cart.itemsPrice).toFixed(2)}
            <br></br>
            Shipping: 
            ${cart.shippingPrice}
            <br></br>
            Tax: 
            ${cart.taxPrice}
            <br></br>
            Total: 
            ${cart.totalPrice}
            </h3>

        </div>

        <div>
            {error && <p>{error}</p>}
        </div>

    
        {cart.cartItems === 0 ? null : <button class="mt-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-red-400" type="button" onClick={placeOrder}>Place Order</button>}

        

    </div>
  )
}

export default PlaceOrderPage