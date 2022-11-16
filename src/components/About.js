import React from 'react'
import Face from "../images/me.jpeg"
import {FiInstagram} from "react-icons/fi"
import {AiFillFacebook,AiOutlineYoutube} from "react-icons/ai"

export default function About() {
  return (
    <div className='md:h-[screen]   py-16  bg-black'>
      <div className=' mx-auto max-w-[1240px] grid md:grid-cols-2 items-center'>
        <div className='flex flex-col items-center'> 
          <h1 className='uppercase  text-[#de3333] font-[900] sm:text-5xl text-4xl p-7 '>Voleanin Max</h1>
        <p className='text-white p-3 '>I love jumping,lifting heavy things and teach others do that too. 
            Training helped me improve my skills in volleyball so much,that now I can not live without it.
            And also I love doing my training based on science. Why? Science reflects the truth.
            Join me on my journey and become the best athlete version of youself.
         </p>
         <p className='text-white p-3'>You will have the ability to send us videos for technique help in lifts 
         and jumps, ask questions, and keep us updated on how your training 
         is going! This alone is worth the price of the online 
         coaching and our service to you the athlete is unmatched.</p>
         <div className='flex flex-col items-center md:flex md:justify-start'>
         <button  className='bg-[#de3333] p-5 ml-3 rounded-lg text-xl mt-6 text-white w-[100%]' >Follow me ↓</button>
         <div className='flex p-6 '>
         <a href='https://www.instagram.com/'>
         <FiInstagram className='text-white hover:scale-105  duration-100' size={50}/>
         </a>
         <a href='https://www.facebook.com/'>
         <AiFillFacebook className='text-white ml-2 hover:scale-105  duration-100' size={50}/>
         </a>
         <a href='https://www.youtube.com/'>
         <AiOutlineYoutube className='text-white ml-2 hover:scale-105  duration-100' size={50}/>
         </a>
         </div>
    
         </div>
        
        </div>
        <img className=' p-7 mx-auto hover:scale-105  duration-100 '  src={Face}></img> 
       
           
      </div>
    </div>
  )
}
