"use client"

import React from 'react'
import { motion } from 'motion/react'

const AnimatedWord = ({ text }) => {

    //This container controls stagger timing of the animation
    const container = { 
        hidden: { opacity : 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1, // half-second delay per lettter
          }
        }
      }

      //Individual animation of each letter

  const letter = { 
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0}
  };



  return (
    <>
    
        <motion.div variants={container} initial="hidden" animate="visible" className="relative flex items-center justify-center">

            {text.split("").map((char, index) => (

                <motion.span key={index} variants={letter} className="text-[4rem] text-outline z-20 word-spacing"> 
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
            
        </motion.div>

    </>
  )
}

export default AnimatedWord;