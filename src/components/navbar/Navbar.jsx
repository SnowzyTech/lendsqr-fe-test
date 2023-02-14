import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
      <div className="">
            <img  src="assets/Group.jpg" alt='logo'/>
            
      </div>
      
        <div className='search'>
          <input type="text" placeholder='Search for anything' />
          <SearchOutlinedIcon className="seach-icon" />
        </div>
        <div className='items'>
          <div className="item">
            Docs
          </div>
          <div className="item">
            <NotificationsNoneIcon />
          </div>
          <div className="item">
            <img src="/assets/emma.jpg" alt="" className='avatar' />
          </div>
          <div className="item">
            Emmanuel  <ArrowDropDownIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar