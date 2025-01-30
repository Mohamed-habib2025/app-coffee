import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import creditCards from "../img/website/credit-cards.webp"
import { FaMapLocation } from 'react-icons/fa6'
import { motion } from "framer-motion"
import React from 'react'

function Footer() {
  return (
    <div className=' bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white'>
      <div className='w-[90%] mx-auto'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {/* Company Details Section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className=' space-y-6'>
            <h1 className=' text-3xl font-bold uppercase'>
              Coders Cafe
            </h1>
            <p className='text-sm max-w-[300px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero, praesentium ab atque? Quidem maxime, numquam dolores
            </p>
            <div>
              <p className='flex items-center gap-2 w-[220px] mb-2'>
                <FaPhone /> +201597845357
              </p>
              <p className='flex items-center gap-2 w-[220px]'>
                <FaMapLocation /> Qalyubia, Shibin El Qenater
              </p>
            </div>
          </motion.div>
          {/* Footer Links Section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className='space-y-6'>
            <h1 className='text-3xl font-bold '> Quick Links </h1>
            <div className='grid grid-cols-2 gap-3'>
              {/* frist column links */}
              <div className=' space-y-2'>
                <ul className=' space-y-2'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* scound column links */}
              <div className=' space-y-2'>
                <ul className=' space-y-2'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links Section  */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className='space-y-6'>
            <h1 className='text-3xl font-bold '> Follow Us </h1>
            <div className=' flex items-center gap-3'>
              <FaFacebook className='text-3xl hover:scale-105 duration-300' />
              <FaInstagram className='text-3xl hover:scale-105 duration-300' />
              <FaTelegram className='text-3xl hover:scale-105 duration-300' />
              <FaGoogle className='text-3xl hover:scale-105 duration-300' />
            </div>
            <div className=''>
              <h1 className=' text-xl mb-2 font-semibold'>Payment Methods</h1>
              <img src={creditCards} className='w-[80%]' alt="" />
            </div>
          </motion.div>
        </div>
        <p className=' text-white text-center mt-8 pt-8 border-t-2'>
          Copyright © 2024 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
