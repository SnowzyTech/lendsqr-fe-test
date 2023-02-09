import React, {useEffect, useState} from 'react'
import { Link, useSearchParams, useParams } from 'react-router-dom'
import './list.scss'
import axios from 'axios'

import { Stack, Box } from '@mui/material'
import New from '../new/New'
const List = () => {



 const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then(res => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">

        </div>
        <div className='card-body'>
        <table className='table table-bordered'>
        <thead className='bg-dark text-white'> 
          <tr>
            <td>ORGANIZATION</td>
            <td>USERNAME</td>
            <td>EMAIL</td>
            <td>PHONE NUMBER</td>
            <td>Date Joined</td>
            <td>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            { 
               posts.map((post, idx) => (
                <>
                <tr key={idx}>
                  <td>{post.orgName}</td>
                  <td>{post.userName}</td>
                  <td>{post.email}</td>
                  <td>{post.phoneNumber}</td>
                  <td>{post.createdAt}</td>
                  <td>active</td>
                  
                    <Link to={post.id ?  `/single/${post.id}` :  <New />}>
                    <td>
                    <button>...</button>
                    </td>
                    </Link>
                    
                  </tr>
                  <div>
                    <p></p>
                  </div>
                </>
               ))}
        </tbody>
      </table>
        </div>
      </div>
      
    </div>
  )
}




export default List;
