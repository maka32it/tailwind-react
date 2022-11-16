import React,{useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const[email,setEmail] = useState('')
  const[message,setMessage] = useState('')
  function handleSubmit(e){
    e.preventDefault()
    if(!email || !message)return 
      navigate('/')
    
  }


  function handleEmail(e){
    setEmail(e.target.value)
  }
  function handleMessage(e){
    setMessage(e.target.value)
  }




  return (
    <div className='w-full h-[85vh] flex justify-center items-center p-4'>
    <form className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <h1 className='text-4xl font-bold inline  border-b-4 border-[#de3333] text-white'>Contact</h1>
            <p className='p-3 mb-0 text-white'>*Enter your email with the type of program you need</p>
        </div>
            <input placeholder='Email' className='p-2 rounded-md'
            name='email'
             value={email}
              onChange={handleEmail} ></input>
            <textarea className='mt-4 rounded-md p-2' placeholder='Enter your message'
             rows={7} value={message}
             name='message'
              onChange={handleMessage} ></textarea>
            <button type='submit' className='bg-[#de3333] p-4 rounded-md font-bold w-[50%] text-white mx-auto mt-5'
             onClick={handleSubmit}>Let's start</button>
    </form>
    </div>
  )
}
