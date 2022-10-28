import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from 'react-router-dom'

function Sharedlayout() {
  return (
    <>
    <Navbar />
    <section className='section'>
      <Outlet />
    </section>
    
    
    </>
  )
}

export default Sharedlayout