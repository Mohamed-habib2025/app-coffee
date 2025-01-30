import PlayStore from "../img/website/play_store.png"
import AppStore from "../img/website/app_store.png"
import { motion } from "framer-motion"
import React from 'react'
import "./Appbanner.css"

function Appbanner() {
  return (
    <div className='w-[95%] mx-auto my-14'>
      <div className="imgbanner md:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl">
        <div>
          <div className=" space-y-6 max-w-xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2,
              }}
              className=" text-4xl font-semibold text-center">Download the app
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.3,
              }}
              className=" text-center sm:px-20">Lorem ipsum dolor sit amet consedolor sit amet consectetur adipisicing elit. Officiis
            </motion.p>
            {/* Imges Link */}
            <div className=" flex justify-center items-center gap-4">
              <a href="" className=" max-w-[150px] sm:max-w-120px md:max-w-[200px]">
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.4,
                  }}
                  src={AppStore} alt="" />
              </a>
              
              <a href="" className=" max-w-[150px] sm:max-w-120px md:max-w-[200px]">
                <motion.img
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.5,
                  }}
                  src={PlayStore} alt="" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Appbanner
