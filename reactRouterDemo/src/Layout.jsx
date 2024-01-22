import React from 'react'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
)
}


