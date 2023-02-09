import React from 'react'
import './sidebar.scss'
// import HouseSharpIcon from '@mui/icons-material/HouseSharp';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
            <img  src="assets/Group.jpg" />
      </div>
      {/* <hr /> */}
      
      <div className='center'>
        <ul>
    
            <p className="title">Switch Organization</p>
            <li>   
            <span>Dashboard</span></li>

            <p className="title">CUSTOMERS</p>
            <li><span>Users</span></li>
            <li><span>Guarantors</span></li>
            <li><span>Loans</span></li>
            <li><span>Decision Models</span></li>
            <li>
                <span>Savings</span>
            </li>
            <li>
                <span>Loan Requests</span>
            </li>
            <li>
                <span>Whitelist</span>
            </li>
            <li>
                <span>Karma</span>
            </li>
            
            <p className="title">BUSINESS=</p>

            <li>
                <span>Organization</span>
            </li>

            <li>
                <span>Loan Products</span>
            </li>
            <li>
                <span>Savings Products</span>
            </li>
            <li>
                <span>Fees and Charges</span>
            </li>

             <li>
                <span>Transactions</span>
            </li>
            <li>
                <span>Services</span>
            </li>
            <li>
                <span>Service Account</span>
            </li>
            <li>
                <span>Settlements</span>
            </li>
            <li>
                <span>Reports</span>
            </li>

            <p className="title">Settings</p>
            <li>
                <span>Preferences</span>
            </li>
             <li>
                <span>Fees and Pricing</span>
            </li>
            <li>
                <span>Audit Logs</span>
            </li>
        </ul>
      </div>
      
    </div> 
  )
}

export default Sidebar
