import React from 'react'
import './welcome.scss'
// import  Group from '../assets/Group.jpg'
// import Pablo from '../assets/pablo-sign-in 1.jpg'
const Welcome = () => {
    return(
        <div className='welcome'>
            <div className='main'>
                <img className='logo' src="assets/Group.jpg" />

                <div className='background'>
                    <img src="assets/pablo-sign-in 1.jpg"/>
                </div>
            </div>
        
        <div className='cover'>
            <div className='head'>
           <h1 className='header'>Welcome!</h1>
           <p>Enter details to login</p> 
            </div>
           <input className='input' type="email" placeholder='Email'></input>
           <input className='input' type="password" placeholder='Password'></input>
            <a href='#'>forgot password?</a>
            <button className='btn'>log in</button>
        </div>
        </div>
        
    )
}
export default Welcome