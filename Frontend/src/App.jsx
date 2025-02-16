import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navbar />  
      <Body />    
    </>
  )
}

export default App