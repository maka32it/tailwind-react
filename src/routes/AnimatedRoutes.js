import React from 'react'
import {Routes,Route,useLocation} from "react-router-dom"
import AboutNav from '../routes/AboutNav';
import ContactNav from '../routes/ContactNav';
import ServicesNav from '../routes/ServicesNav';
import Home from '../routes/Home';
import {AnimatePresence} from "framer-motion"

export default function Animated() {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<ServicesNav/>}/>
        <Route path='/about' element={<AboutNav/>}/>
        <Route path='/contact' element={<ContactNav/>}/>
      </Routes>
      </AnimatePresence>
  )
}
