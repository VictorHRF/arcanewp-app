import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

export const Arcane = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}
