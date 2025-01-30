import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from "framer-motion"
import React from 'react'

function Navbar({sidebar , setsidebar}) {

  return (
    <nav className=' absolute top-0 left-0 w-full pt-10 text-white z-[100]'>
      <div className='w-[95%] mx-auto'>
        <div className=' flex justify-between items-center'>
          {/* LOGO */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
            className=' text-2xl font-semibold uppercase'><span className=' text-primary'>Coders</span> Coffee.</motion.h1>
          {/* menu */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setsidebar(!sidebar)}
          >
            <GiHamburgerMenu className='text-3xl cursor-pointer' />
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
