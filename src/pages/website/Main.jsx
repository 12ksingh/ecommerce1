import React from 'react'
import Header from '../../component/website/Header'
import Footer from '../../component/website/Footer'
import {Outlet} from 'react-router-dom'
import Home from "./Home";

export default function Main() {
  return ( 
    <>
    <Header/>
    <Outlet>
      <Home/>
    </Outlet>
    <Footer/>
    </>
  )
}
