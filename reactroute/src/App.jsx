import { useState } from 'react'
import Footer from './components/Footer/footer'
import Headers from './components/Header/header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Headers />
      <Outlet />
      <Footer />


    </>
  )
}

export default App
