"use client"

import { motion } from 'framer-motion'
import { services } from './servicesData';
import { fadeIn, staggerContainer, textVariant } from "@/lib/motion";
import { ServiceCard } from './ServiceCard';


export const Services = () => {
    
    return (
        <motion.section
            variants={staggerContainer(1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
            className={`max-h-7xl mx-auto relative z-0 p-5`}
        >

            <motion.div variants={textVariant(1)}>
                <p className="text-5xl text-primary font-poppins">Services</p>
                <h2 className="">À propos.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("left", "tween", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                {`Je suis un développeur web fullstack et mobile passionné, expert en Symfony, React, Next.js, Node.js et React-Native. Fort d'une expérience approfondie dans la création d'applications web et mobiles réactives et modernes, je suis motivé par les défis techniques et cherche constamment à repousser les limites de la technologie. Avec une approche centrée sur l'utilisateur et une grande attention aux détails, je conçois des solutions innovantes répondant aux besoins et attentes des utilisateurs finaux.`}<br /><br />

                <b className='text-2xl'>Mon tech stack se présente comme suit :</b>
            </motion.p>

            <div className='mt-20 flex justify-center items-center flex-wrap gap-10'>
                {
                    services.map((service, index) => (
                        <ServiceCard key={index.toString()} index={index} service={service}  />
                    ))
                }
            </div>
        </motion.section>
    )
}
