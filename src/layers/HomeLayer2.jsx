import React from 'react'
import { Navbar } from '../components/Navbar';
import { motion } from 'framer-motion';
export const HomeLayer2 = ({layer2}) => {
    const color1='#000000'
    const color2='#FFFFFF'
  return (
    <div className='h-screen w-screen bg-white'>
      <div className='flex flex-col items-center justify-center'>
          <motion.div
          initial={{y:'0%'}}
          animate={layer2?{y:"50%"}:{}}
          transition={{ duration: 1, ease: "easeInOut" }}
          >
              hello world
          </motion.div>
      </div>
    </div>
  )
}
