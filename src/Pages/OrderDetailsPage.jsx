import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {getOrderDetails, payOrder} from '../Actions/orderActions'
import axios from 'axios'

 
const OrderDetailsPage = () => {

    
    
    const {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()


    
    const [order, setOrder] = useState({})
    // const orderDetail = useSelector(state => state.orderDetail)
    // const order = orderDetail
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    useEffect(() => {
        axios.get(`/orders/${id}`, 
        {headers:{'Content-type' : 'application/json', Authorization: `Bearer ${userInfo.token}`}})
            .then(res =>{
                console.log(res)
                setOrder(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id, userInfo.token])
    
    
    console.log(order)
    console.log(order.orderItems)
    console.log(id)
    console.log(userInfo)
    
    // order.itemsPrice = order?.orderItems.reduce((acc, item) => acc + item.price * item.cartQty, 0)


    //might still need this
    // useEffect(() => {
    //     // if(!order || order.id !== Number(id)){
    //         dispatch(getOrderDetails(id))
    //         // console.log(id)
    //     // }
    // }, [dispatch, id])

    
    // AXjUNE2xdEpihjQK-ik8YSz9vomo1C7QNefNoiVvjxBkbMnXzdCZuHd4Oced1gqBf0N8mi58PK9wP1Ph




  return (
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">

    

       







        <h1 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Order# {order?.id}</h1>
        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
        {/* Shipping Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.zipcode} */}
        </div>
        
        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
        Payment Method: {order?.paymentMethod}
        </div>

        <br></br><br></br><br></br>

        <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
            <h2 >Order Items</h2>
            {order?.orderItems?.map((item, index) => {
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
            ${order?.itemsPrice}
            <br></br>
            Shipping: 
            ${order?.shippingPrice}
            <br></br>
            Tax: 
            ${order?.taxPrice}
            <br></br>
            Total: 
            ${order?.totalPrice}
            </h3>

        </div>

        <div>
            {/* {error && <p>{error}</p>} */}
        </div>

    
        {/* {order.orderItems === 0 ? null : <button class="mt-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-red-400" type="button" onClick={placeOrder}>Place Order</button>} */}

    
    
    </div>
  )
}

export default OrderDetailsPage