import React from 'react'
import './login.scss'
import { Link } from 'react-router-dom'
const Login = () => {
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
            <Link to="/home" className="linkbtn">
              <button className='btn'>log in</button>
            </Link>
        </div>
        </div>
        
    )
}
export default Login;