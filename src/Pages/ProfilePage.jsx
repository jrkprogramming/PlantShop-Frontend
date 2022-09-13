import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {getUserDetails, editUserInfo} from '../Actions/userActions'

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
    const {user, error} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userEdit = useSelector(state => state.userEdit)
    const {success} = userEdit

    useEffect(() => {
        if(!userInfo) {
            navigate('/users/login')
        } else {
            if(!user || !user.username || success) {
                dispatch({type: 'USER_RESET'})
                dispatch(getUserDetails('profile'))
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
    <div className="p-10 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-[30%] my-[5%]">
        
        <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-neutral-100">User Profile</h1>

        <br></br>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
        
        {/* <form onSubmit={handleSubmit}>
            Username:
            <input type="text" name="username" value={username} required onChange={(e) => {setUsername(e.target.value)}}></input>
            <br></br>
            Email:
            <input type="text" name="email" value={email} required onChange={(e) => {setEmail(e.target.value)} }></input>
            <br></br>
            First Name:
            <input type="text" name="first_name" value={first_name} required onChange={(e) => {set_first_name(e.target.value)}}></input>
            <br></br>
            Last Name:
            <input type="text" name="last_name" value={last_name} required onChange={(e) => {set_last_name(e.target.value)}}></input>
            <br></br>
            Password:
            <input type="text" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <br></br>
            Confirm Password:
            <input type="text" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}></input>

            <button type="submit">UPDATE</button>
        </form> */}

<form>
<div class="relative z-0 mb-6 w-full group">
      <input type="text" name="username" value={username} required onChange={(e) => {setUsername(e.target.value)}} id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
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

  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE ACCOUNT</button>
</form>


    </div>
  )
}

export default ProfilePage