import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {getOrderDetails, payOrder} from '../Actions/orderActions'
import axios from 'axios'

 
const OrderDetailsPage = () => {
    
    const {id} = useParams();
    
    const [order, setOrder] = useState({})

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
    

  return (
    // <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">



    //     <h1 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Order# {order?.id}</h1>
    //     <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
    //     {/* Shipping Address: {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.zipcode} */}
    //     </div>
        
    //     <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
    //     Payment Method: {order?.paymentMethod}
    //     </div>

    //     <br></br><br></br><br></br>

    //     <div className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">
    //         <h2 >Order Items</h2>
    //         {order?.orderItems?.map((item, index) => {
    //             return <div>
    //                 <img src={item.image} alt={item.name}></img>
    //                 <Link to={`/plants/${item.plant}`}>{item.name}</Link>
    //                 <br></br>
    //                 {item.cartQty} x ${item.price} = ${(item.cartQty * item.price).toFixed(2)}
    //                 <br></br><br></br>
    //             </div>
    //         })}
    //     </div>

    //     <div>

    //         <h3 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100">Order Summary
    //         Subtotal: 
    //         ${order?.itemsPrice}
    //         <br></br>
    //         Shipping: 
    //         ${order?.shippingPrice}
    //         <br></br>
    //         Tax: 
    //         ${order?.taxPrice}
    //         <br></br>
    //         Total: 
    //         ${order?.totalPrice}
    //         </h3>

    //     </div>

    //     <div>
    //         {/* {error && <p>{error}</p>} */}
    //     </div>

    
    //     {/* {order.orderItems === 0 ? null : <button class="mt-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-red-400" type="button" onClick={placeOrder}>Place Order</button>} */}

    
    
    // </div>

    <div>

<div class="rounded-lg mt-[5%] ml-[10%] w-[80%] h-[80%] bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
        
<div class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
    <div class="flex items-end lg:flex-row flex-col justify-center" id="cart">
    <div class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
        <div class="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer" onclick="checkoutHandler(false)">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
        </svg>
        <p class="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p>
        </div>
        <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Order#: {order?.id}</p>
        <br></br>




        {/* {cartItems.map(item => (
        <div key={item.plant}>


            <h5 className="mt-0 mb-2 text-2xl font-medium leading-tight text-neutral-100"><Link to={`/plants/${item.plant}`}>{item.name}</Link>

            {item.cartQty} x ${item.price} = ${(item.price * item.cartQty).toFixed(2)}</h5>

            <form className="flex inline-flex" onChange={(e) => dispatch(addToCart(item.plant, Number(e.target.value)))}>
                <select value={item.cartQty} >
                {
                    [...Array(item.quantity).keys()].map((index) => (
                        <option key={index+1} value={index+1}>
                            {index+1}
                        </option>
                    ))
                }
                </select>
            </form>

            <br></br>
            <br></br>
            <img src={item.image} alt={item.name} className="w-[40%] h-[48%]"></img>


            <button class="mt-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-white rounded-lg dark:bg-green-500 dark:hover:bg-red-400  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" type='button' onClick={()=> removeFromCartHandler(item.plant)}><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>REMOVE</button> */}






    {order?.orderItems?.map(item => (
        <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
        <div class="md:w-4/12 2xl:w-1/4 w-full">
            <img src={item.image} alt={item.name} class="h-full object-center object-cover md:block hidden" />
            <img src={item.image} alt={item.name} class="md:hidden w-full h-full object-center object-cover" />
        </div>
        <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <p class="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">Item #: {item.plant}</p>
            <div class="flex items-center justify-between w-full pt-1">
            <p class="text-base font-black leading-none text-gray-800 dark:text-white">{item.name}</p>


            {/* <form className="flex inline-flex" onChange={(e) => dispatch(addToCart(item.plant, Number(e.target.value)))}>
            <select aria-label="Select quantity" value={item.cartQty} class="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
            {
                    [...Array(item.quantity).keys()].map((index) => (
                        <option key={index+1} value={index+1}>
                            {index+1}
                        </option>
                    ))
            }
            </select>
            </form> */}
            
            <br></br><br></br>

            </div>
            {/* <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Height: 10 inches</p> */}
            {/* <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: Black</p> */}
            <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Quantity: {item.cartQty}</p>
            <div class="flex items-center justify-between pt-5">
            {/* <div class="flex itemms-center">
                <button class="text-xs leading-3 underline text-red-500 cursor-pointer" onClick={()=> removeFromCartHandler(item.plant)}>Remove</button>
            </div> */}
            <p class="text-base font-black leading-none text-gray-800 dark:text-white">{item.cartQty} x ${item.price} = ${(item.price * item.cartQty).toFixed(2)}</p>
            </div>
        </div>
        </div>

))}



    </div>
    <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
        <div class="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
        <div>
            <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
            <div class="flex items-center justify-between pt-16">
            <p class="text-base leading-none text-gray-800 dark:text-white">Customer Name:</p>
            <p class="text-base leading-none text-gray-800 dark:text-white">{order?.user?.first_name} {order?.user?.last_name}</p>
            </div>
            <div class="flex items-center justify-between pt-16">
            <p class="text-base leading-none text-gray-800 dark:text-white"># of Items</p>
            <p class="text-base leading-none text-gray-800 dark:text-white">{order?.orderItems?.reduce((acc, item) => acc + item.cartQty, 0)}</p>
            </div>
            <div class="flex items-center justify-between pt-5">
            <p class="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
            <p class="text-base leading-none text-gray-800 dark:text-white">{!order?.orderItems?.shippingAddress ? 'N/A' : '$10.00'}</p>
            </div>
            <div class="flex items-center justify-between pt-5">
            <p class="text-base leading-none text-gray-800 dark:text-white">Tax: </p>
            <p class="text-base leading-none text-gray-800 dark:text-white">${order?.taxPrice}</p>
            </div>
            <div class="flex items-center justify-between pt-5 ">
            <p class="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
            <p class="text-base leading-none text-gray-800 dark:text-white">${order?.orderItems?.reduce((acc, item) => acc + item.cartQty * item.price, 0).toFixed(2)}</p>
            </div>

            <div class="flex items-center justify-between pt-5">
            <p class="leading-none text-gray-800 dark:text-white text-4xl">Total</p>
            <p class="leading-none text-gray-800 dark:text-white text-5xl">${order?.taxPrice}</p>
            </div>
            


       
  
  
            <br></br>
            {/* <button onClick={checkoutHandler} class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">PROCEED TO CHECKOUT</button> */}
            {/* {order.cartItems === 0 ? null : <button class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700" type="button" onClick={placeOrder}>PLACE ORDER</button>} */}
        </div>
        {/* <div>
            <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p class="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
            <p class="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">,240</p>
            </div>
            <button onClick={checkoutHandler} class="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
        </div> */}
        </div>
    </div>
    </div>
</div>

</div>



</div>
  )
}

export default OrderDetailsPage