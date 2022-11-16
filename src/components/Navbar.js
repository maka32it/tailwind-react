import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {SiJordan} from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [nav,setNav] =  useState(true)
    
    function handleNav(){
        setNav(!nav)
    }
  return (
    <div className=' flex justify-between items-center h-[15vh] max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#de3333] p-1' ><Link to='/'>jumpUP
      <SiJordan className='inline' size={50}/></Link></h1>
      <ul className='hidden md:flex list-none'>
        <li className='p-4 hover:bg-[#de3333] rounded-md'><Link to='/'>Home</Link></li>
        <li className='p-4 hover:bg-[#de3333] rounded-md'><Link to='/services'>Services</Link></li>
        <li className='p-4 hover:bg-[#de3333] rounded-md'><Link to='/about'>About</Link></li>
        <li className='p-4 hover:bg-[#de3333] rounded-md'><Link to='/contact'>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
       
      </div>
      <div className={!nav ? 'fixed lef-0 top-0 h-full w-[60%] border-r border-r-gray bg-[#18212f]  ' : "hidden "}>
        <h1 className='w-full text-3xl font-bold text-[#de3333] m-6'>jumpUP</h1>

        <ul className='p-6 uppercase '>
        <li className='p-4 border-b border-red-600'><Link to='/'>Home</Link></li>
        <li className='p-4 border-b border-red-600'><Link to='/services'>Services</Link></li>
        <li className='p-4 border-b border-red-600'><Link to='/about'>About</Link></li>
        <li className='p-4'><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}
