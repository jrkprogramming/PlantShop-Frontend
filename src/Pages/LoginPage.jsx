import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {login} from '../Actions/userActions'

const LoginPage = () => {
    
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo, error} = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate('/plants')
        }
    },[userInfo, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

  return (
    <div>

    <h1>Sign In</h1>
    {error && <p>{error}</p>}
    <form onSubmit={submitHandler}>
        Username:
        <input type="text" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}}></input>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>

        <button type="submit">SIGN IN</button>
    </form>

        <br></br>

        Don't have an account? <Link to={'/users/signup'}>Register</Link>

    </div>
  )
}

export default LoginPage