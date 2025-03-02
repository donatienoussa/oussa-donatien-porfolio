"use client"

import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion'
import { fadeIn } from "@/lib/motion";
import Image, { StaticImageData } from "next/image";

interface Service {
  title: string,
  icon:StaticImageData
}

interface Props extends Service {
  index: number,
  service: Service
}

export const ServiceCard = ({ index, service: { title, icon } }: Props) => {
  
  return (
    <Tilt className="xs:w-[250px] w-[300px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient rounded-[20px] p-[1px] shadow-card'
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <Image
            src={icon}
            alt={title}
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{ title }</h3>
        </motion.div>
      </motion.div>
    </Tilt>
  )
}
