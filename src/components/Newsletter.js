import React from 'react'
import {AiFillYoutube} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Newsletter() {
  return (
    <div className='w-full py-16 text-white '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols '>
        <div className='text-center'>
            <h1 className='text-3xl sm:text-5xl font-bold text-[#de3333] py-2' >Want some free tips? </h1>
            <p className='text-2xl'>Follow me on YouTube </p>
        </div>
        <div className='flex flex-col items-center '>
            <AiFillYoutube  size={150} />
            <button className='bg-[#de3333] p-2 rounded-md font-bold w-[50%]'>
            <a href='https://www.youtube.com/'>Follow us</a> </button>
        </div>
      </div>
    </div>
  )
}
