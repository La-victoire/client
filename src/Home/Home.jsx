import React, { useRef } from 'react'
import { useOutletContext } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import '../index.css'
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import { useState, useEffect } from 'react';
const customStyles = 'border-[0.5px] border-gray-400 text-sm flex items-center justify-center min-h-[70px] sm:px-0 px-2 py-4 sm:min-w-[120px] text-white'

const Home = () => {
  const [DisplayText, setDisplayText] = useState("")
  const { homeRef, abtRef, projRef, footRef } = useOutletContext();


  const text = 'Oghuvbu Victory'

  useEffect(() => {
    let index = 0
    const typeWriter = () => {
      if (index < text.length ) {
        setDisplayText(text.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100 )
      }
    }
    typeWriter()  }
    , [])



  return (
    <>
      <div className="lg:px-10 pt-8">
      <section
        id="Home"
        ref={homeRef}
        className="flex flex-col-reverse
        justify-center gap-y-10 md:gap-y-0   items-center 
        md:flex-row-reverse "
      >
        {/* Image Section */}
        <div className="w-full md:w-6/12 flex justify-center items-center">
          <div className="w-full grad h-[300px] md:h-[525px]">
            <img
              className="md:w-full w-9/12 h-full object-cover rounded-lg shadow-lg z-10"
              src="public/imgs/E46A9326.jpg"
              alt="My image"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="w-full md:w-6/12 flex flex-col justify-center items-start space-y-6 px-5 md:px-10">
          <p className="inline border text-white px-4 py-2">
            Hi there, Welcome to my digital space
          </p>
          <div className="flex flex-col space-y-3 text-[#aeaeae]">
            <span className="block text-xl">My Name is</span>
            <span className="overflow-hidden balme font-bold txt-grad lg:text-[60px] text-[50px]">
              {DisplayText}.
            </span>
            <p className="text-4xl font-bold text-[#aeaeae] leading-relaxed">
              I'm a <strong className="text-white">Software Engineer</strong> with a passion for building responsive, intuitive interfaces.
            </p>
            <p className="font-thin text-base">
              I transform ideas into creative masterpieces with my can-do
              attitude.
            </p>
            <div className="flex space-x-5">
              <a href="mailto:oghuvbuvictory@gmail.com">
                <button className="bg-white text-black hover:bg-transparent hover:border hover:text-white rounded-2xl px-4 py-2">
                  Get in touch
                </button>
              </a>
              <a
                href="public/imgs/Oghuvbu_Victory_CV.pdf"
                download="Oghuvbu-Victory-CV"
              >
                <button className="bg-transparent border rounded-2xl px-4 py-2 hover:bg-white hover:text-black">
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section id='Abt' ref={abtRef} className='mt-10 border-t border-white text-white'>
        <About  />
      </section>
      <section id='Proj' ref={projRef}
      className={` text-white`}>
        <Projects/>
      </section>
      <section id='Foot' ref={footRef} className='text-[#aeaeae] gradient-bg-footer border-t border-white mt-9 flex flex-col items-center'>
        <Footer/>
      </section>
      </div>
    


    </>
  )
}

export default Home