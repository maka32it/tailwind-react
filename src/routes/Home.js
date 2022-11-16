import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import {motion} from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0,transition:{duration:0.3}}}
    >
    <Navbar></Navbar>
      <Hero/>
      <Services></Services>
      <Newsletter></Newsletter>
      <About></About>
      <Footer></Footer>
    </motion.div>
  )
}

