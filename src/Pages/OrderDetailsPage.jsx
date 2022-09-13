import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation, useParams} from 'react-router-dom'
import {getOrderDetails} from '../Actions/orderActions'
 
const OrderDetailsPage = () => {
    const {id} = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const orderDetail = useSelector(state => state.orderDetail)
    const {order, error, loading} = orderDetail

    console.log(order)
    
    if(!loading && !error){
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.orderQty, 0)
    }


    useEffect(() => {
        if(!order || order.id !== Number(id)){
            console.log(order)
            dispatch(getOrderDetails(id))

        }
    }, [dispatch, order, id])

    


  return (
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">
        
        <h1 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Review Order</h1>
        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
        Shipping Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.zipcode}
        </div>
        
        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
        Payment Method: {order.paymentMethod}
        </div>

        <br></br><br></br><br></br>

        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
            <h2 >Order Items</h2>
            {order.orderItems.length === 0 ? 'There are no plants in your order!' : order.orderItems.map((item, index) => {
                return <div>
                    <img src={item.image} alt={item.name}></img>
                    <Link to={`/plants/${item.plant}`}>{item.name}</Link>
                    <br></br>
                    {item.orderQty} x ${item.price} = ${(item.orderQty * item.price).toFixed(2)}
                    <br></br><br></br>
                </div>
            })}
        </div>

        <div>

            <h3 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Order Summary
            Subtotal: 
            ${(order.itemsPrice).toFixed(2)}
            <br></br>
            Shipping: 
            ${order.shippingPrice}
            <br></br>
            Tax: 
            ${order.taxPrice}
            <br></br>
            Total: 
            ${order.totalPrice}
            </h3>

        </div>

        <div>
            {error && <p>{error}</p>}
        </div>

    
        {/* {order.orderItems === 0 ? null : <button class="mt-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-red-400" type="button" onClick={placeOrder}>Place Order</button>} */}

    </div>
  )
}

export default OrderDetailsPage