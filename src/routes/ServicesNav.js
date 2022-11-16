import React from 'react'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Jump from "../images/jump.JPG"
import {motion} from "framer-motion"

export default function ServicesNav() {
  return (
    <motion.div  initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.3}}}>
      <Navbar></Navbar>
      <div className='w-full bg-black py-14 px-4 h-[170vh] md:h-[85vh] '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <div className='text-white'>
            <h1 className='text-[#de3333] text-4xl font-bold  text-center md:text-start'>jumpUp ONLINE TRAINING</h1>
            <ul className='mt-5 text-center md:text-start'>
                <li  before='✓' className=' before:content-[attr(before)]  p-4 text-xl'>Completely personalized program</li>
                <li  before='✓' className='before:content-[attr(before)]  p-4 text-xl'>ZERO equipment needed</li>
                <li  before='✓' className='before:content-[attr(before)] p-4 text-xl'>Access to private THP Facebook group</li>
                <li  before='✓' className='before:content-[attr(before)] p-4 text-xl'>Jumping and lifting technique analysis</li>
                <li  before='✓' className='before:content-[attr(before)] p-4 text-xl'>Videos on how to do every exercise</li>
            </ul>
            <div className=' flex flex-col md:grid md:grid-cols-2  gap-6 text-white items-center' >
                <button className=' bg-[#de3333] p-2 rounded-md  mt-6 font-bold md:w-full w-[70%]' >100$/month</button>                
                <button className='bg-[#de3333] p-2 rounded-md  mt-6 font-bold md:w-full w-[70%] '>279$/3 months</button>                
                <button className='bg-[#de3333] p-2 rounded-md  mt-6 mb-3 font-bold md:w-full w-[70%] '>500$/6 months</button>                
                <button className='bg-[#de3333] p-2 rounded-md  mt-6 mb-3 font-bold md:w-full w-[70%] '>1 on 1 coaching</button>                

            </div>
        </div>
        <img src={Jump} className='my-auto px-6 ' ></img>
      </div>
    </div>
    </motion.div>
  )
}
