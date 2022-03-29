import react from 'react';
import {Link, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Home';
import About from './About';
import Exchanges from './Exchanges';


function App() {
  return (
      <div className='link-container'>
        <Link className='page-links'to="/">Home</Link>
        <Link className='page-links' to="/about">About</Link>
        <Link className='page-links' to="/exchanges">Exchanges</Link>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchanges" element={<Exchanges />} />
        </Routes>
      </div>
  )}

export default App;
