import worldmap from "../img/website/world-map.png"
import { motion } from "framer-motion"
import React from 'react'

function WhereToBuy() {
  return (
    <div className='w-[95%] mx-auto my-36 bg-gray-200 p-5 rounded-lg'>
      <div className=' grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
        {/* from section */}
        <div className=' space-y-6'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className=' text-4xl font-semibold font-serif'>Buy our products from anywhere
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
            }}
            className='flex items-center gap-4'>
            <input className='input-style w-full lg:w-[150px]' type="text" placeholder='Name' />
            <input className='input-style w-full ' type="email" placeholder='Email' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
            }}
            className='flex items-center gap-4'>
            <input className='input-style w-full ' type="text" placeholder='Country' />
            <input className='input-style w-full lg:w-[150px]' type="text" placeholder='Zipcode' />
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
            className=' w-full primary-btn'> Order Now </motion.button>
        </div>
        {/* World Map section */}
        <div className='col-span-2'>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.8,
            }}
            className=' w-full sm:w-[500px] mx-auto' src={worldmap} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhereToBuy
