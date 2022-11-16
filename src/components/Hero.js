import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-90px] w-full h-[100vh] text-center mx-auto flex flex-col justify-center items-center'>
        <h1 className='uppercase text-[#de3333] font-bold sm:text-5xl text-3xl  '>Elite Jump Training</h1>
      
        <p className='px-9 pt-5 sm:text-2xl text-1xl'>Highly individualized jump training developed 
            and delivered to you by the coaches of
             the highest jumpers in the world.</p>
        <div className='flex justify-center items-center'>
            <p className='p-5 text-2xl pr-0'>Do you really want to jump</p>
             <Typed className=' text-2xl font-bold text-[#de3333] pl-2' 
                strings={[' HIGH?']}
                typeSpeed={120}
                backSpeed={140}
                loop/>
        </div>
        <button className='bg-[#de3333] p-5 rounded-lg text-xl mt-6 '><Link to='/contact'>Sign up now</Link></button>
      </div>
    </div>
  )
}
