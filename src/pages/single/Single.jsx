// import React from 'react'
import React, {useEffect, useState} from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Single = ({}) => {
  const { id } = useParams();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
    .then((res) => {
      console.log(res)
      setPosts(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


 
  return (
    <div>
      <h6>
         {id}
         {posts.education.level}
      </h6>
    </div>
    )


  }

export default Single;
