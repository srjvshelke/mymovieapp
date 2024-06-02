import React from 'react'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Trending from './Page/Trending';

function App() {
  return (
    <div className='Main_div'>
      {/* <Routes> */}
        {/* <Route path="/trending" element={<Trending />} /> */}
        <Header />
        <Body />
        <Footer />
      {/* </Routes> */}
    </div>




  )
}

export default App