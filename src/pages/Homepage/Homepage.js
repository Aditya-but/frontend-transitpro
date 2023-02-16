import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Content/Footer'
import Header from '../../components/Content/Header'
import Middle from '../../components/Content/Middle'
import Middletwo from '../../components/Content/Middletwo'
import Navbar from '../../components/navbar/Navbar'

const Homepage = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <Middle/>
    <Middletwo/>
    <Footer/>
    <Outlet/>

    </div>
  )
}

export default Homepage