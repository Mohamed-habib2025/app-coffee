import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa6'
import imghero from "../img/website/black.png"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import Navbar from './Navbar'
import "./hero.css"

function Hero() {

  const [sidebar, setsidebar] = useState(false);

  return (
    <main className='bgimg'>
      <section className=' relative min-h-[750px] w-full'>
        <div className='w-[95%] mx-auto'>
          <Navbar sidebar={sidebar} setsidebar={setsidebar} />
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px] '>
            {/* text left*/}
            <div className='text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 1,
                }}
                className='text-7xl font-bold leading-tight ml-14'>
                Bivck Tumbler
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 1.2,
                }}
                className=' relative'>
                <div className=' relative z-10 space-y-4'>
                  <h1 className='text-2xl'> Black Lifestyle Lovers,</h1>
                  <h1 className='text-sm opacity-55 leading-loose'> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Rerum itaque consectetur
                    doloremque adipisci, unde earum illum cumque
                    iste repellat corrupti voluptatum similique et
                    est exercitationem !
                  </h1>
                </div>
                <div className=' absolute -top-6 -left-20 w-[300px] h-[190px] bg-gray-700/25'></div>
              </motion.div>
            </div>
            {/* section img */}
            <div className=' relative'>
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.4,
                }}
                src={imghero} alt="" className=' relative z-40 h-[400px] md:h-[700px] img-shadow' />
              {/* circle orange */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.8,
                }}
                className=' h-[130px] md:h-[180px] w-[130px] md:w-[180px] absolute top-8 -right-14 md:top-24 lg:-right-16 border-primary border-[12px] md:border-[18px] rounded-full z-10 '></motion.div>
              {/* big text section */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.8,
                }}
                className=' absolute -top-20 left-[200px]'>
                <h1 className='text-[140px] scale-150 font-bold text-darkGray/40 leading-none'>
                  Bivck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* text right*/}
            <div className=' hidden lg:block'>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 1.2,
                }}
                className=' text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28'>
                <h1
                  className=' opacity-0 text-7xl font-bold leading-tight ml-14'>
                  Bivck Tumbler
                </h1>
                <div className=' relative'>
                  <div className=' relative z-10 space-y-4'>
                    <h1 className='text-2xl'> Bivck Tumbler</h1>
                    <h1 className='text-sm opacity-55 leading-loose'> Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Rerum itaque consectetur
                      doloremque adipisci, unde earum illum cumque
                    </h1>
                  </div>
                  <div className=' absolute -top-6 -right-20 w-[290px] h-[200px] bg-darkGray/50'>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
        {/* menu */}
        {
          sidebar && (
            <motion.div
              initial={{ x: 140 }}
              whileInView={{ x: 0 }}
              className=' absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-50'>
              <div className=' w-full h-full flex flex-col justify-center items-center gap-6 '>
                {/* line */}
                <div className=' absolute top-[235px] w-[1px] h-[70px] bg-white '></div>
                {/* social icons */}
                <div className=' absolute top-80 flex flex-col justify-center items-center gap-4 '>
                  <div className=' p-2 border-white border-[1px] rounded-full cursor-pointer '>
                    <FaFacebookF className=' text-2xl text-white hover:text-black duration-200' />
                  </div>
                  <div className=' p-2 border-white border-[1px] rounded-full cursor-pointer  '>
                    <FaInstagram className=' text-2xl text-white hover:text-black duration-200' />
                  </div>
                  <div className=' p-2 border-white border-[1px] rounded-full cursor-pointer  '>
                    <FaWhatsapp className=' text-2xl text-white hover:text-black duration-200' />
                  </div>
                </div>
                {/* line */}
                <div className='absolute top-[490px] w-[1px] h-[70px] bg-white '></div>
              </div>
            </motion.div>
          )
        }
      </section>
    </main>
  )
}

export default Hero
