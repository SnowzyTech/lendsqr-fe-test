import React from 'react'
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Welcome />} />
       
     </Routes>
    </BrowserRouter>
  );
}

export default App;
