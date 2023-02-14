import React, { useState, useEffect} from 'react'
import './widget.scss'
import axios from "axios";
import Table from '@mui/material/Table';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
const Widget = () => {

  return (
    <>
    <div className='widget-box'>
    <div className="widget">
    
      <div className="left">
        <PersonOutlinedIcon className="person" />
        <span className='title2'>USERS</span>
        <span className='counter'>2,453</span>
      </div>
      
    </div>

<div className="widget">
<div className="left">
  <PersonOutlinedIcon className="person2" />
  <span className='title2'>ACTIVE USERS</span>
  <span className='counter'>2,453</span>
</div>

</div>

<div className="widget">
      <div className="left">
        <PersonOutlinedIcon className="person3" />
        <span className='title2'>USERS WITH LOANS</span>
        <span className='counter'>12,453</span>
      </div>
      
  </div>

  <div className="widget">
      <div className="left">
        <PersonOutlinedIcon className="person3" />
        <span className='title2'>USERS WITH SAVINGS</span>
        <span className='counter'>102,453</span>
      </div>
      
  </div>
    </div>
    
    </>
  )
}

export default Widget