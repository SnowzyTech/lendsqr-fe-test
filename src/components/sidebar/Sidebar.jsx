import React from 'react'
import './sidebar.scss'
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PolylineIcon from '@mui/icons-material/Polyline';
import SavingsIcon from '@mui/icons-material/Savings';
import PersonIcon from '@mui/icons-material/Person';
import BackpackSharpIcon from '@mui/icons-material/BackpackSharp';
import BusinessCenterSharpIcon from '@mui/icons-material/BusinessCenterSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MacroOffIcon from '@mui/icons-material/MacroOff';
import GiteIcon from '@mui/icons-material/Gite';
import FeedIcon from '@mui/icons-material/Feed';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import CameraIcon from '@mui/icons-material/Camera';
import BarChartIcon from '@mui/icons-material/BarChart';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import MotionPhotosOffIcon from '@mui/icons-material/MotionPhotosOff';
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      
      {/* <hr /> */}
      
      <div className='center'>
        <ul>
            <li className='title'> <BusinessCenterSharpIcon className="icon" />
            <span>Switch Organization</span>  <ExpandMoreIcon className="icon" />
            </li>
            
            <li> <HouseSharpIcon className="icon" />  
            <span>Dashboard</span></li>

            <p className="title">CUSTOMERS</p>
            <li style={{backgroundColor: '#ece8ff'}}> <GroupRoundedIcon className="icon" />
                <span>Users</span>
            </li>
            <li> <PeopleAltIcon className="icon" />
                <span>Guarantors</span>
            </li>
            <li> <LocalMallIcon className="icon"/>
                <span>Loans</span>
            </li>
            <li> <PolylineIcon className="icon" />
                <span>Decision Models</span>
            </li>
            <li> <SavingsIcon className="icon" />
                <span>Savings</span>
            </li>
            <li> <BackpackSharpIcon className="icon" />
                <span>Loan Requests</span>
            </li>
            <li> <PersonIcon className="icon" />
                <span>Whitelist</span>
            </li>
            <li> <PersonIcon className="icon" />
                <span>Karma</span>
            </li>
            
            <p className="title">BUSINESS</p>

            <li>  <BusinessCenterSharpIcon className="icon" />
                <span>Organization</span>
            </li>

            <li> <MacroOffIcon className="icon" />
                <span>Loan Products</span>
            </li>
            <li>  <GiteIcon  className="icon" />
                <span>Savings Products</span>
            </li>
            <li>  <FeedIcon  className="icon"/>
                <span>Fees and Charges</span>
            </li>

             <li> <TransferWithinAStationIcon className="icon" />
                <span>Transactions</span>
            </li>
            <li> <CameraIcon  className="icon" />
                <span>Services</span>
            </li>
            <li> <PersonIcon className="icon" />
                <span>Service Account</span>
            </li>
            <li> <MoneyOffCsredIcon className="icon" />
                <span>Settlements</span>
            </li>
            <li> <BarChartIcon className="icon" />
                <span>Reports</span>
            </li>

            <p className="title">SETTINGS</p>
            <li> <FormatAlignLeftIcon className="icon" />
                <span>Preferences</span>
            </li>
             <li> <MotionPhotosOffIcon className="icon" />
                <span>Fees and Pricing</span>
            </li>
            <li>
                <span>Audit Logs</span>
            </li>
            <li>
            <Link to='/' style={{textDecoration: 'none'}}>
              <LogoutIcon className="icon" />
            <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div> 
  )
}

export default Sidebar