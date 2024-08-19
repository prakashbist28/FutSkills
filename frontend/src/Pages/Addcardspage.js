import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import AddCards from '../Components/AddCards'


function Addcardspage() {
  return (
    < div className=' min-h-screen  flex flex-col'>
      <Header />
      <AddCards />
      <Footer/>
    </div>
  )
}

export default Addcardspage