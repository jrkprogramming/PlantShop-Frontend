import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {getUserDetails, editUserInfo} from '../Actions/userActions'
import {listOrders} from '../Actions/orderActions'

const ProfilePage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [first_name, set_first_name] = useState('')
    const [last_name, set_last_name] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const userDetails = useSelector(state => state.userDetails)
    const {user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userEdit = useSelector(state => state.userEdit)
    const {success} = userEdit
    
    const listMyOrders = useSelector(state => state.listMyOrders)
    const {orders} = listMyOrders

    console.log(orders)

    useEffect(() => {
        if(!userInfo) {
            navigate('/users/login')
        } else {
            if(!user || !user.username || success) {
                dispatch({type: 'USER_RESET'})
                dispatch(getUserDetails('profile'))
                dispatch(listOrders())
            } else {
                setUsername(user.username)
                setEmail(user.email)
                set_first_name(user.first_name)
                set_last_name(user.last_name)
            }
        }
    },[userInfo, navigate, user, dispatch, success])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password !== confirmPassword) {
            setMessage('Passwords Do Not Match')
        } else {
            dispatch(editUserInfo({
                'id': user.id,
                'username': user.username,
                'email': email,
                'first_name': first_name,
                'last_name': last_name,
                'password': password,
            }))
        }
        navigate('/plants')
    }


  return (
    <div >
        
        {/* <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-neutral-100">User Profile</h1> */}
{/* 
        <br></br>
<div>


<form onSubmit={handleSubmit}>
<div class="relative z-0 mb-6 w-full group">
      <input type="text" name="username" value={username} required onChange={(e) => {setUsername(e.target.value)}} id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="text" name="email" value={email} required onChange={(e) => {setEmail(e.target.value)} } id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="text" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 mb-6 w-full group">
      <input type="text" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="first_name" value={first_name} required onChange={(e) => {set_first_name(e.target.value)}} id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 mb-6 w-full group">
        <input type="text" name="last_name" value={last_name} required onChange={(e) => {set_last_name(e.target.value)}} id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>

  <br></br>

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-500 dark:hover:bg-stone-400 dark:focus:ring-blue-800">UPDATE ACCOUNT</button>
</form>
</div>




<br></br><br></br>





    <div>
        <h2 className="mt-0 mb-2 text-5xl font-medium leading-tight text-neutral-100">MY ORDERS</h2>
        <table className="mt-0 mb-2 font-medium leading-tight table-auto text-5 text-neutral-100">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Delivered</th>
                    <th></th>
                </tr>
            </thead>
                <br></br>
                       <tbody>
                                    {orders.map(order => (
                                        <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.createdAt.substring(0, 10)}</td>
                                            <td>${order.totalPrice}</td>
                                            <td>{order.isPaid ? 'PAID' : (
                                                <i className='fas fa-times' style={{ color: 'red' }}></i>
                                            )}</td>
                                            <td>
                                                <Link to={`/orders/${order.id}`}>
                                                    <button className='btn-sm'>Details</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
        </table>
    </div> */}

<div class="max-w-2xl mx-auto mb-[10%]">

	<div>
    <h2 className="mt-5 mb-2 text-5xl font-medium leading-tight text-neutral-100">My Orders</h2>
		<div class="p-4 rounded-lg">

			{/* <label for="table-search" class="sr-only">Search</label>
			<div class="relative mt-1">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"></path>
					</svg>
				</div>
				<input type="text" id="table-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items"></input>
        </div> */}
        
			</div>
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="px-6 py-3">
                        Order #
						</th>
						<th scope="col" class="px-6 py-3">
                        Date
						</th>
						<th scope="col" class="px-6 py-3">
						Total
						</th>
						<th scope="col" class="px-6 py-3">
						Paid Status
						</th>
						<th scope="col" class="px-6 py-3">
						</th>
					</tr>
				</thead>

                <tbody>
                                    {orders.map(order => (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={order._id}>
                                            <td class="px-6 py-4">{order.id}</td>
                                            <td class="px-6 py-4">{order.createdAt.substring(0, 10)}</td>
                                            <td class="px-6 py-4">${order.totalPrice}</td>
                                            <td class="px-6 py-4">{order.isPaid ? 'PAID' : (
                                                <i className='fas fa-times' style={{ color: 'red' }}>Not Paid</i>
                                            )}</td>
                                            <td>
                                                <Link to={`/orders/${order.id}`}>
                                                    <button className='btn-sm'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
</svg></button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
			</table>
		</div>
		<script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
	</div>


    </div>
  )
}

export default ProfilePage