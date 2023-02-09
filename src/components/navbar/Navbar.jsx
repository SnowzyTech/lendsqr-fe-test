import React from 'react'
import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='Search for anything' />

        </div>
        <div className='items'>
          <div className="item">
            Docs
          </div>
          <div className="item">
            <img src="/assets/jesse.jpg" alt="" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
