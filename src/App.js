import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  
  return (
    <div className='Main_div'>
      <Header />
      <Outlet/>
      <Footer />
    </div>




  )
}

export default App