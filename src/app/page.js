"use client"

import Image from "next/image";
import Logo from '../../public/WATERMARK_LOGO.png'
import Logo1 from '../../public/WATERMARK_LOGO.webp'
import Headshot from '../../public/nobg.png'
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LiaUser, LiaSearchSolid, LiaBriefcaseSolid } from "react-icons/lia";

import { motion, AnimatePresence } from "motion/react"


import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FaBriefcase,  } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";



import { useInView } from 'react-intersection-observer';




// Import Slices for easy subout of elements
import AnimatedWord from "@/slices/AnimatedWord";
import PageTabs from "@/slices/PageTabs";
import { inView } from "motion";

export default function Home() {



  //Apple Frame Like Animation 

  const frames = [
    "/cars/car_blue.jpg",
    "/cars/car_green.jpg",
    "/cars/car_purple.jpg",
    "/cars/car_red.jpg",
  ];
  
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        setIndex(prev => (prev + 1) % frames.length);
        console.log("interval tick");
      } catch (e) {
        console.error("interval crash:", e);
      }
    }, 5000);
  
    return () => clearInterval(interval);
  }, []);
  
  


    const buttonRef = useRef(null);
    const scrollToRef = () => {


      const current = buttonRef;
      if (current !== null) {
        current.scrollIntoView({behavior: 'smooth'})
      }
    }
    

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.8
    })


  const handleArrowPress = () => {

    console.log("This button has been pressed")
  }

  const [userIsScrollingDown, setIsScrollingDown] = useState(false);
  const [heroArrowPress, setHeroArrowButton ] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const buttonLabels = [
    'Introduction',
    'Education',
    'Experience',
    'Contact',
  ]
  const buttonLabelsTwo = [
    'Who We Are',
    'Personal Skills',
    'Other Work',
    'Thank You',
  ]


  useEffect(() =>  {

    const handleScroll = () => {

      const currentScrollY = window.scrollY;
      console.log(currentScrollY)

      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      }
      else {
        setIsScrollingDown(false)
      }
      setLastScrollY(currentScrollY)
    }

      window.addEventListener('scroll', handleScroll);
        return () => {

          window.removeEventListener('scroll', handleScroll)
       }

  }, [lastScrollY])
  

  return (
    <div>

      <section className="relative flex flex-col bg-black items-center justify-center w-full h-screen">


    {/* Base garage image (always visible) */}
    <motion.div initial={{opacity: 0}}  animate={{opacity: 1}} transition={{duration: 2.25}}>

      <Image
          src="/cars/car_base.jpg"
          alt="Car in garage"
          fill
          priority
          className="object-cover opacity-80"
        />

    </motion.div>
      
      <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
              key={frames[index]}
            >
            <Image
              src={frames[index]}
              alt="Background"
              fill
              priority
              sizes="100vw" // ensures full width scaling
              className="object-cover"
            />
            </motion.div>
        </AnimatePresence>
        <motion.div
         initial={{ opacity: 0 }} 
         animate={{ opacity: 1}} 
         transition={{
        duration: 1, // The animation will take 1 second to complete
        delay: 2,   // Start the animation after 0.5 seconds
                }} id="top-box" className="absolute text-white top-5 w-3/4 text-[14px] flex gap-3 justify-around p-4">

          <span className="cursor-pointer">Car Wraps</span>
                    <span className="cursor-pointer">PPF</span>
                              <span className="cursor-pointer">Tints</span>
                              <span className="cursor-pointer">Ceramic Coating</span>
                              <span className="cursor-pointer">Paint Correction</span>

                              <span className="cursor-pointer">Lift Kits & Much More</span>


        </motion.div>
        <motion.header
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1}} 
            transition={{
            duration: 1, // The animation will take 1 second to complete
            delay: 2,   // Start the animation after 0.5 seconds
              }} 
            className=" flex-row absolute top-[6rem] z-[1000] flex w-full">
          <nav className="flex justify-between text-lg p-3 gap-[10rem] w-full">
            <ul className="flex  gap-5 pl-[6rem] items-center text-white">

              <li className="hover:border-b-2 hover:font-semibold cursor-pointer">
                Home
              </li>
              <li className="hover:border-b-2 hover:font-semibold cursor-pointer">
                Financing
              </li>
              <li className="hover:border-b-2 hover:font-semibold cursor-pointer">
                Services
              </li>
              <li className="hover:border-b-2 hover:font-semibold cursor-pointer">
                Pricing
              </li>
            </ul>
            <ul className="flex  gap-3  mr-[14rem] justify-center z-[1000] items-center text-white">
              
            <li className="hover:scale-110 cursor-pointer text-2xl">
                <LiaSearchSolid />

              </li>
              <li className="hover:scale-110 cursor-pointer text-2xl">

                <LiaUser />

              </li>
              <li className="hover:scale-110 cursor-pointer text-2xl">
                <LiaBriefcaseSolid />
              </li>
              
            </ul>
          </nav>
        </motion.header>
        {/* <motion.div variants={container} className="relative border flex items-center justify-center flex-col" id="hero-section-container">

          <span className="text-[13rem] text-outline z-20 word-spacing">PORTFOLIO</span>
          <Image className="absolute z-10" width={550} height={150} alt="Headshot Photo" src={Headshot} /> 
        </motion.div> */}

        <div className="flex absolute top-[9rem] right-[3rem] flex-col">

          <AnimatedWord text="4WRAPPERZ" />
          <motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}} className="absolute text-white text-2xl  bottom-[-1rem] right-5">Automotive Customization</motion.span>
        </div>
       
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}} className="flex flex-col text-white left-[10rem] gap-3 absolute bottom-[5rem] p-5">
          <span>888-888-8888</span>
          <button className="border uppercase hover:bg-gray-400 cursor-pointer z-50 hover:border-black rounded-sm p-2">Free Quote</button>
        </motion.div>


        <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{
          duration: 1,
          delay: 2,
        }} id="bottom-box" className="absolute bottom-1 w-full flex items-center justify-between p-6">
        <div className="animate-bounce opacity-0 text-2xl">
        <button onClick={scrollToRef} className="border w-8">
           <FontAwesomeIcon className="mr-[6rem]" icon={faArrowDown} />

        </button>
        </div>

      </motion.div>
      </section>

      <section ref={ref} className="relative flex flex-col gap-4 items-center justify-center w-full h-screen">

          <h2 className="absolute top-12 text-2xl">HUMANN DESIGN</h2>
          {/* Section Content */}
          <motion.div ref={buttonRef} initial={{ opacity: 0, y: 30}} animate={inView? {opacity: 1, y: 0 } : {}} transition={{duration: 0.6}} className="flex relative justify-evenly w-full h-full">
            <div className="flex p-10 flex-col  w-1/2">
              
              <div className="mt-[10rem] p-3 w-full">

                <h1 className="text-8xl text-black uppercase p-2 text-two">A Breath of Life</h1>
                <span className="text-4xl p-2 text-red-500 font-bold">with intentional design.</span>
              </div>
             
            </div>

            {/* Right Side of Section */}
            <div className="w-1/2 items-center justify-center flex">


              {/* Left Column of Button Tabs */}
              {/* <div className="flex  justify-center gap-[3rem] items-center w-1/2 flex-col">

              {buttonLabels.map((label, index) => (
                <button key={index} className=" hover:bg-[#f3dcf1] hover:text-black  border p-4 w-[70%] rounded-[2rem]">
                  <span>
                      {label}
                  </span>
              </button>
              ))}

              </div> */}
               {/* Right Column of Button Tabs */}
               <div className="flex justify-cewhite mr-12 gap-[3rem] items-center w-1/2 flex-col">

                  <a className=" bg-red-500 text-white text-center hover:bg-black hover:border cursor-pointer hover:text-white p-4 w-[70%] rounded-[2rem]" href="https://humanndesign.com">
                    <button >
                        <span>
                            Who We Are
                        </span>
                    </button>
                  </a>
                  <a className=" bg-red-500 text-white text-center hover:bg-black hover:border cursor-pointer hover:text-white p-4 w-[70%] rounded-[2rem]" href="https://humanndesign.com">
                    <button >
                        <span>
                           Other Work
                        </span>
                    </button>
                  </a>
                  <a className=" bg-red-500 text-white text-center hover:bg-black hover:border cursor-pointer hover:text-white p-4 w-[70%] rounded-[2rem]" href="https://humanndesign.com">
                    <button >
                        <span>
                            Contact
                        </span>
                    </button>
                  </a>
                  <a className=" bg-red-500 text-white text-center hover:bg-black hover:border cursor-pointer hover:text-white p-4 w-[70%] rounded-[2rem]" href="https://humanndesign.com">
                    <button >
                        <span>
                            Thank You
                        </span>
                    </button>
                  </a>
                    

              </div>

            </div>

            <Image width={150} height={100} className="absolute bottom-0" alt="Cassie Created Logo" src={Logo1} />

          </motion.div>

      </section>


      
    </div>
  );
}
