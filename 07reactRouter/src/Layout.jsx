import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './components/Header/Headers.jsx'
import Footers from './components/Footer/Footers.jsx'

const Layout = () => {
  return (
    <>
    <Headers />
    <Outlet />
   <Footers />
    </>
  )
}

export default Layout