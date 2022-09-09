import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        
        <header>
          Plant Shop
          <Link to='/cart'>Cart</Link>
          <Link to='/login'>Login</Link>

        </header>

    </div>
  )
}

export default Header