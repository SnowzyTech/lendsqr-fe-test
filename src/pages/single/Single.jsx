import React, { useEffect, useState } from "react";
import "./single.scss";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {Menu} from '../home/Home'
import MenuIcon from '@mui/icons-material/Menu'
import CancelIcon from '@mui/icons-material/Cancel'
// user Details Page
const Single = () => {
  const params = useParams();
  const [user, setUsers] = useState();
  const [toggleMenu, setToggleMenu] = useState(false)
  // fetching single user by id
  useEffect(() => {
    const UserApi = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`;
    axios.get(UserApi).then((res) => setUsers(res.data));

    console.log("Params", params);
  }, [params]);


  // FILLING USER INFO 
  return (
    <div>
      {user && (
        <>
          <div className="nav">
            <Navbar />
          </div>
          <div className="new">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="newContainer">
              <div className="b-user">
                <Link to='/home' className="link">
                <ArrowRightAltIcon className="arrow" /> <span>Back to Users</span>
                </Link>
                <div className="btnSec">
                  <button className="btn1">Blacklisted</button>
                  <button className="btn2">Active</button>
                </div>
              </div>
              <div className="user-head">
              <h3>User Detail</h3>
             <div className="menubar">
              {toggleMenu 
              ? <CancelIcon color="#000" size={27} onClick={() => setToggleMenu(false)}/>
              : <MenuIcon color="#000" size={27} onClick={() => setToggleMenu(true)}/>   
              }
              {toggleMenu && (
                <div className="menu-container scale-up-center">
                  <Menu/>
                </div>
              )}
            </div>
              </div>
              <div className="top">
                <div className='top1'>
                <div className="left">
                  <img src={user.profile.avatar} alt={user.email} />
                  <div className="details">
                    <h3 style={{color: '#213F7D'}}>{user.userName}</h3>
                    <small style={{color: '#545F7D'}}>{user.accountNumber}</small>
                  </div>
                </div>
                <div className="center">
                  <div className='deatils'>
                    <h3 style={{color: '#213F7D'}}>User's Tier</h3>
                    <span style={{color: '#E9B200'}}><StarIcon/> <StarBorderPurple500Icon /> <StarBorderPurple500Icon />
                    </span>
                  </div>   
                </div>
                <div className="right">
                  <div className="details" style={{color: '#213F7D'}}>
                  <h3>${user.accountBalance}</h3>
                  <small>{user.profile.bvn}</small>
                  </div>
                  </div>
                </div>
                <div className="top2">
                    <div className="li" style={{color:'#39CDCC',borderBottom:'4px solid #39CDCC'}}>General Details</div>
                    <div className="li">Document</div>
                    <div className="li">Bank Details</div>
                    <div className="li">Loans</div>
                    <div className="li">Savings</div>
                    <div className="li">App and System</div>
                </div>
              </div>
              <div className="bottom" key={user.id}>
                <div>
                  <h3 className="topic">Personal Information</h3>
                  <div className="sector">
                    <div>
                      <p>full name</p>
                      <h6>
                        {user.profile.firstName} {user.profile.lastName}
                      </h6>
                    </div>
                    <div>
                      <p>phone number</p>
                      <h6>{user.phoneNumber}</h6>
                    </div>
                    <div>
                      <p>email</p>
                      <h6>{user.email}</h6>
                    </div>
                    <div>
                      <p>bvn</p>
                      <h6>{user.profile.bvn}</h6>
                    </div>
                    <div>
                      <p>gender</p>
                      <h6>{user.profile.gender}</h6>
                    </div>
                    <div>
                      <p>marital status</p>
                      <h6>single</h6>
                    </div>
                    <div>
                      <p>children</p>
                      <h6>none</h6>
                    </div>
                    <div>
                      <p>type of residence</p>
                      <h6>parent's apartment</h6>
                    </div>
                  </div>
                </div>
                <hr style={{ color: "lightgrey" }}></hr>
                <div>
                  <h3 className="topic">Education and Employment</h3>
                  <div className="sector">
                    <div>
                      <p>level of education</p>
                      <h6>{user.education.level}</h6>
                    </div>
                    <div>
                      <p>Employment Status</p>
                      <h6>{user.education.employmentStatus}</h6>
                    </div>
                    <div>
                      <p>Sector of employment</p>
                      <h6>{user.education.sector}</h6>
                    </div>
                    <div>
                      <p>Duration of Employment</p>
                      <h6>{user.education.duration}</h6>
                    </div>
                    <div>
                      <p>Office Email</p>
                      <h6>{user.education.officeEmail}</h6>
                    </div>
                    <div>
                      <p>monthly Income</p>
                      {/* <div className='income'> */}

                      <h6>
                        ${user.education.monthlyIncome[0]} - $
                        {user.education.monthlyIncome[1]}
                      </h6>

                      {/* </div> */}
                    </div>
                    <div>
                      <p>Office Email</p>
                      <h6>{user.education.officeEmail}</h6>
                    </div>
                  </div>
                </div>
                <hr style={{ color: "lightgrey" }}></hr>
                <div>
                  <h3 className="topic">Social</h3>
                  <div className="sector">
                    <div>
                      <p>twitter</p>
                      <h6>{user.socials.twitter}</h6>
                    </div>
                    <div>
                      <p>facebook</p>
                      <h6>{user.socials.facebook}</h6>
                    </div>
                    <div>
                      <p>instagram</p>
                      <h6>{user.socials.instagram}</h6>
                    </div>
                  </div>
                </div>
                <hr style={{ color: "lightgrey" }}></hr>
                <div>
                  <h3 className="topic">Guarantor</h3>
                  <div className="sector">
                    <div>
                      <p>full name</p>
                      <h6> {user.guarantor.firstName} {user.guarantor.lastName}</h6>
                    </div>
                    <div>
                      <p>phone number</p>
                      <h6>{user.guarantor.phoneNumber}</h6>
                    </div>
                    <div>
                      <p>email address</p>
                      <h6>{user.email}</h6>
                    </div>
                    <div>
                      <p>relationship</p>
                      <h6>Sister</h6>
                    </div>
                  </div>
                </div>
                <hr style={{ color: "lightgrey" }}></hr>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Single;