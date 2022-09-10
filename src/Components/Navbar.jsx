import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../Actions/userActions'

const Navbar = () => {

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
        <nav>
          <Link to='/plants'>Plant Shop</Link>
          <Link to='/cart'>Cart</Link>
          {userInfo ? (
            <a>
              <Link to='/users/profile'>{userInfo.username}</Link> 
              <button onClick={logoutHandler}>Logout</button>
            </a>
            ):
            <Link to='/login'>Login</Link>
            }
        </nav>
  )
}

export default Navbar