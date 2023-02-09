import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import List from '../list/List'
const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
        <div className="homeContainer">
            <Navbar/>
            <div className="widgets">
                <Widget />
                
            </div>
            <List />
        </div>
       </div>
    )
}



export default Home;