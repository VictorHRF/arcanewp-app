import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

export const Arcane = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
