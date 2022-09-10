import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
        <nav>
          <Link to='/plants'>Plant Shop</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/login'>Login</Link>
        </nav>
  )
}

export default Navbar