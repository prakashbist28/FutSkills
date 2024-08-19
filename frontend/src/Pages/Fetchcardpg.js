import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Fetchcard from '../Components/Fetchcard'

function Fetchcardpg() {
  return (
    < div className=' min-h-screen  flex flex-col'>
      <Header />
      <Fetchcard />
      <Footer/>
    </div>
  )
}

export default Fetchcardpg