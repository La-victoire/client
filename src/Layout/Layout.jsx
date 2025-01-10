import React from 'react'
import Header from '../Home/Header'
import '../index.css'
import { Outlet } from 'react-router-dom'
import { useRef, useState , useEffect } from 'react'
import { motion } from 'framer-motion'

const Layout = () => {
  
    const [DisplayText, setDisplayText] = useState("");
    const [isTypingComp, setIsTypingComp] = useState(false);
    const [subtitle, setSubtitle] = useState(false);
    const homeRef = useRef(null);
    const abtRef = useRef(null);
    const projRef = useRef(null);
    const footRef = useRef(null);

  const scroll = (section) => {
    let element;

    switch (section) {
      case 'Home':
        element = homeRef.current;
        break;
      case 'Abt':
        element = abtRef.current;
        break;
      case 'Proj':
        element = projRef.current;
        break;
      case 'Foot':
        element = footRef.current
        break;
      default:
        console.log("Invalid Input");
        return; // Exit early for invalid input
    }

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.error(`Element with ID ${section} not found.`);
    }
  };


  const text = 'Oghuvbu Victory'

  useEffect(() => {
    let index = 0
    const typeWriter = () => {
      if (index < text.length ) {
        setDisplayText(text.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100 )
      } else {
        setTimeout(() => {
          setIsTypingComp(true) 
        }, 1500);// Adjusted to 1.5 seconds for style
      }
    }
    typeWriter();
    }, []);

    // Show the subtitle after the typewriter animation is complete
  useEffect(() => {
    if (!isTypingComp) {
      setTimeout(() => setSubtitle(true), 500); // Delay for subtitle animation
    }
  }, [isTypingComp]);


  return (
    <>
      {!isTypingComp?(
        <div className='h-screen gradient-bg-welcome flex flex-col items-center justify-center'>
          <motion.div
          initial={{ opacity: 0, y:60 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1 }}
          className='md:text-[90px] text-[50px] txt-grad text-center playwrite-vn'>
            <span className='balme'>
            {DisplayText}
            </span>
            <span className='bg-white ml-2 w-[2px] inline-block h-6 animate-pulse '></span>
          </motion.div>
      {/* Subtitle */}
      {DisplayText === "Oghuvbu Victory" && ( // Check if typewriter has finished
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          className='text-[#aeaeae] transition-all duration-700 ease-in-out transform text-center text-2xl md:text-4xl '
          >
              Software Engineer 
              Web And Mobile App Developer
          </motion.div>
          )}
        </div>
      ):(
      <div className='gradient-bg-welcome'>
      <Header scroll={scroll}/>
      <Outlet context={{ homeRef, abtRef, projRef,footRef }}/>
      </div>
      )}
      </>
  )
}

export default Layout