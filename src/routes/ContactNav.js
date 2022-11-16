import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import {motion} from "framer-motion"

export default function ContactNav() {
  return (
    <motion.div 
     initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.3}}}>
      <Navbar></Navbar>
      <Contact></Contact>
    </motion.div>
  )
}
