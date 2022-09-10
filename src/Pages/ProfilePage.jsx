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
    }


  return (
    <div>
        
        <h1>User Profile</h1>

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
            <input type="text" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
            <br></br>
            Confirm Password:
            <input type="text" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}></input>

            <button type="submit">UPDATE</button>
        </form>


    </div>
  )
}

export default ProfilePage