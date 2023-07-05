import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from './layout/navbar';
import Home from './pages/home';
import Add from './pages/Add';
import { useState } from 'react';
 

function App() {

  const [item, setItem]=useState();

  return (
    <div className='App'>
    <Router>
      <Navbar/>
  
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/add" element={<Add/>}/>
    
    </Routes>

    </Router>
  </div>
  );
}

export default App;
