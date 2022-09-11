import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {saveShippingAddress} from '../Actions/cartActions'

const ShippingPage = () => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [zipcode, setZipcode] = useState(shippingAddress.zipcode)
    const [state, setState] = useState(shippingAddress.state)

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(saveShippingAddress({address, city, zipcode, state}))
      navigate('/payment')
    }

  return (
    <div>
        
        <h1>Shipping</h1>

        <form onSubmit={handleSubmit}>
        Address:
        <input type="text" name="address" value={address ? address : ''} required onChange={(e) => {setAddress(e.target.value)}}></input>
        City:
        <input type="text" name="city" value={city ? city : ''} required onChange={(e) => {setCity(e.target.value)}}></input>
        Zipcode:
        <input type="text" name="zipcode" value={zipcode ? zipcode : ''} required onChange={(e) => {setZipcode(e.target.value)}}></input>
        State:
        <input type="text" name="state" value={state ? state : ''} required onChange={(e) => {setState(e.target.value)}}></input>
        
          <button type="submit" name="">Continue</button>
        </form>

    </div>
  )
}

export default ShippingPage