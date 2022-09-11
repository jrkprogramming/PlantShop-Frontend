import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'

const PlaceOrderPage = () => {

    const cart = useSelector(state => state.cart)

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.cartQty, 0)

    /// Shipping Price is also Delivery Charge
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)

    cart.taxPrice = Number((0.06) * cart.itemsPrice).toFixed(2)

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    
    const placeOrder = () => {
        console.log('Placed Order')
    }

  return (
    <div>
        
        <h1>Review Order</h1>
        <div>
        Shipping Address: {cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.state}, {cart.shippingAddress.zipcode}
        </div>
        
        <div>
        Payment Method: {cart.paymentMethod}
        </div>

        <br></br><br></br><br></br>

        <div>
            <h2>Order Items</h2>
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

            <h2>Order Summary</h2>
            Subtotal: 
            ${cart.itemsPrice}
            <br></br>
            Shipping: 
            ${cart.shippingPrice}
            <br></br>
            Tax: 
            ${cart.taxPrice}
            <br></br>
            Total: 
            ${cart.totalPrice}

        </div>

        {cart.cartItems === 0 ? null : <button type="button" onClick={placeOrder}>Place Order</button>}

    </div>
  )
}

export default PlaceOrderPage