import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Chart from './components/Chart';
import Chart_Page from './components/pages/Chart_Page';
function App() {
  // const [backendData, setBackendData] = useState([{}])
  // useEffect(() => {
  //   fetch("/api").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // },[])
  
  return (
    
    <>
   
      <Router>
        <NavBar/>
          <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/chart'  element={<Chart_Page/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
