import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {signup} from '../Actions/userActions'

const SignupPage = () => {

    
        const navigate = useNavigate()
        const location = useLocation()
        const dispatch = useDispatch()
        
        const [username, setUsername] = useState('')
        const [email, setEmail] = useState('')
        const [first_name, set_first_name] = useState('')
        const [last_name, set_last_name] = useState('')
        const [password, setPassword] = useState('')
        const [confirmPassword, setConfirmPassword] = useState('')
        const [message, setMessage] = useState('')
    
        const redirect = location.search ? location.search.split('=')[1] : '/plants'
    
        const userSignup = useSelector(state => state.userSignup)
        const {userInfo, error} = userSignup
    
        useEffect(() => {
            if(userInfo) {
                navigate(redirect)
            }
        },[userInfo, redirect, navigate])
    
        const handleSubmit = (e) => {
            e.preventDefault()
            // if(password !== confirmPassword) {
            //     setMessage('Passwords Do Not Match')
            // } else {
                dispatch(signup(username, email, first_name, last_name, password))
            // }
        }



  return (
    <div>

    <h1>Sign Up</h1>
    {message && <p>{message}</p>}
    {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
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
        <input type="text" name="password" value={password} required onChange={(e) => {setPassword(e.target.value)}}></input>
        <br></br>
        Confirm Password:
        <input type="text" name="confirmPassword" value={confirmPassword} required onChange={(e) => {setConfirmPassword(e.target.value)}}></input>

        <button type="submit">REGISTER</button>
    </form>

    Have an account? <Link to={redirect ? `/users/login?redirect=${redirect}` : '/users/login'}>Log In</Link>

    </div>
  )
}

export default SignupPage