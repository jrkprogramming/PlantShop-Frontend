import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {savePaymentMethod} from '../Actions/cartActions'

const PaymentPage = () => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if(!shippingAddress.address) {
        navigate('/shipping')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')
    }


  return (
    <div>

        <form onSubmit={handleSubmit}>
            Select Method:
            PayPal:
            <input type="radio" value="paypal" name="paymentMethod" checked onChange={(e) => setPaymentMethod(e.target.value)}/>
            Credit Card:
            <input type="radio" value="card" name="paymentMethod" checked onChange={(e) => setPaymentMethod(e.target.value)}/>
            <button type="submit" >Continue</button>
        </form>


    </div>
  )
}

export default PaymentPage