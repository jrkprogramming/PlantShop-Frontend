import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <header>
          <Link to='/products'>Plant Shop</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/login'>Login</Link>

        </header>

    </div>
  )
}

export default Header