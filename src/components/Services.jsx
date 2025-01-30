import React from 'react'
import { motion } from "framer-motion"
import img1 from "../img/coffee/coffee1.png"
import img2 from "../img/coffee/coffee3.png"

// const ServicesData = [
//   {
//     id: 1,
//     image: img1,
//     title: "Black Coffee",
//     subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     id: 2,
//     image: img2,
//     title: "Hot Coffee",
//     subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
//   {
//     id: 3,
//     image: img1,
//     title: "Cold Coffee",
//     subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   },
// ]

// const cardVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 200,
//       damping: 10,
//     },
//   }
// };

// const containerVariants = {
//   hidden: { opacity: 1 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 1,
//       staggerChildren: 0.4,
//     },
//   },
// };

function Services() {
  return (
    <div className='w-[95%] mx-auto my-16 space-y-4 bg-gray-200 p-5 rounded-lg'>
      {/* header section */}
      <div className='text-center max-w-lg mx-auto space-y-2 '>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2,
          }}
          className=' font-bold text-3xl'>Fresh and <span className='text-primary'>Tasty coffee</span></motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.6,
          }}
          className=' text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit eum ducimus, distinctio cum eaque totam voluptatem ex dolorem fuga.</motion.p>
      </div>
      {/* card section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className='text-center space-y-2'>
          <img className=' img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={img1} alt="" />
          <h1 className=' text-2xl font-bold text-primary'>Black Coffee</h1>
          <p className='text-darkGray'>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className='text-center space-y-2'>
          <img className=' img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={img2} alt="" />
          <h1 className=' text-2xl font-bold text-primary'>Hot Coffee</h1>
          <p className='text-darkGray'>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          className='text-center space-y-2'>
          <img className=' img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={img1} alt="" />
          <h1 className=' text-2xl font-bold text-primary'>Cold Coffee</h1>
          <p className='text-darkGray'>lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </motion.div>

      </div>

      {/* <motion.div variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {
          ServicesData.map((service) => (
            <motion.div key={service.id}
              variants={cardVariants}
              className='text-center space-y-2'>
              <img className=' img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' src={service.image} alt="" />
              <h1 className=' text-2xl font-bold text-primary'>{service.title}</h1>
              <p className='text-darkGray'>{service.subtitle}</p>
            </motion.div>
          ))
        }
      </motion.div> */}
    </div>
  )
}

export default Services
