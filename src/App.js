import React from 'react'
import './App.css';
import Welcome from './pages/welcome/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
function App() {
  return (
    <BrowserRouter>
     <Routes >
       <Route path='/' element={<Welcome />} />
       <Route path='/home' element={<Home />} />
       <Route path="new" element={<New />}/>
      
        <Route exact path="users" element={<List />} />
        <Route exact path='/single/:id' element={<Single />} />
  
      
     </Routes>
    </BrowserRouter>
  );
}

export default App;
