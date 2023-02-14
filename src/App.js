import React from 'react'
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import UserPage from './pages/user/UserPage';
import Single from './pages/single/Single';
function App() {
  return (
    <BrowserRouter>
     <Routes >
       <Route path='/' element={<Login />} />
       <Route path='/home' element={<Home />} />
        <Route exact path="users" element={<UserPage />} />
        <Route exact path='/users/:id' element={<Single />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;