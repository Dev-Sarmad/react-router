import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='about'>about</Link>
            <Link to='products'>Products</Link>
        </nav>
    </div>
  )
}

export default Navbar