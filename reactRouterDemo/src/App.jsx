import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'

function App() {

  return (
    <>
      {/* <h1 className='bg-green-400 p-4'>React Router</h1> */}
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
