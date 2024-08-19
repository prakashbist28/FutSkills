import React from 'react'
import logoimg from '../assets/logo.png'

function Footer() {
  const Resources = [{name: 'Blog', link:'/'}, {name: 'Help Center', link:'/' }, {name:'Release Notes', link:'/'}, {name: 'Status', link:'/'}]

  const Community = [{name:'Twitter', link: 'https://x.com/?lang=en'},{name:'Facebook', link:'https://www.facebook.com/'},{name:'LinkedIn',link:'https://www.linkedin.com/'}, {name:'Dribble',link:'https://dribbble.com/'}, {name:'Podcast', link:'https://podcasts.google.com/'}]


  const Company  = [{name: 'About us', link:'/'}, {name:'Careers', link:'/'}, {name: 'Legal', link:'/' }]


  return (
    <div className='bg-black '>
      <div className='min-h-80  grid grid-cols-2 md:grid-cols-3 gap-16 lg:grid-cols-5 justify-between pt-10 pl-20 pr-20 pb-10'>
        <div className=' flex flex-col gap-2'>
          <h1 className='text-white text-xl font-bold'>Abstract</h1>
          <a href='/' target='_blank' className='text-white cursor-pointer font-thin hover:text-indigo-200'>Branches</a>
        </div>
        <div className=' flex flex-col gap-2'>
          <h1 className='text-white text-xl font-bold'>Resources</h1>
          {Resources.map((item, index)=>(
            <a target='_blank' href={item.link} key={index} className='text-white hover:text-indigo-200 font-thin cursor-pointer'>{item.name}</a>
          ))} 
        </div>
        <div className=' flex flex-col gap-2'>
          <h1 className='text-white text-xl font-bold'>Community</h1>
          {Community.map((item, index)=>(
            <a target='_blank' href={item.link} key={index} className='text-white hover:text-indigo-200 font-thin cursor-pointer'>{item.name}</a>
          ))} 
        </div>
        <div className=' flex flex-col gap-2'>
          <h1 className='text-white text-xl font-bold'>Company</h1>
          {Company.map((item, index)=>(
            <a target='_blank' href={item.link} key={index} className='text-white hover:text-indigo-200 font-thin cursor-pointer'>{item.name}</a>
          ))}
          <h1 className='text-white text-lg font-semibold pt-4'>Contact Us</h1>
          <h1 className='text-white font-thin hover:text-indigo-200'>info@abstract.com</h1>
        </div>
        <div className=' flex flex-col gap-2 pt-36'>
          <img src={logoimg} alt='logo' className='w-10 rounded-xl' />
          <h1 className='text-white font-normal'>© Copyright 2022 <br/> Abstract Studio Design, Inc.<br/> All Rights Reserved</h1>
          
        </div>

      </div>
    </div>
  )
}

export default Footer