import React from 'react'
import { FaGamepad } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { PiBracketsAngleBold } from "react-icons/pi";
import { PiCurrencyEthBold } from "react-icons/pi";


const stack = "rounded-full bg-[hsla(339,49%,30%,1)] text-white font-thin mt-3 flex px-4 py-2"


const About = () => {

  return (
    <>
    <div className='py-24 px-5 '>
            <h1 className='text-center mb-10 text-4xl '> 
            About Me.
            </h1>
      <div className='flex space-x-7 gap-y-10 flex-col lg:flex-row'>
        <div className='flex lg:gap-20 items-center gap-y-10 flex-col '>
          <div className='flex gap-10 flex-col lg:flex-row text-gray-200 overflow-hidden'> 
            <div className=' group flex flex-col px-5 py-5 gap-4 bg-opacity-10 backdrop-blur-lg rounded-2xl  w-[288px] h-[200px] bg-white/10 hover:bg-white/20'>
              <FaGamepad size={30}  className='text-[#3d99be] group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-300'/>

              <h1 className='text-xl font-semibold'>Gaming</h1>
              <p className='font-light text-[#aeaeae] '> Developed valuable social skills and competitive prowess through immersive gaming experiences </p>
            </div>
            <div className=' group flex flex-col px-5 py-5 gap-4 bg-opacity-10 backdrop-blur-lg rounded-2xl w-[288px] h-[200px] bg-white/10 hover:bg-white/20'>
              <FaBookReader size={30} className='text-[#3d99be] group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-300'/>
              <h1 className='text-xl font-semibold'>Studying </h1>
              <p className='font-light text-[#aeaeae] '>  I am always on the lookout for modern technologies and means of gaining experiences. </p>
            </div>
          </div>
          <div className='flex gap-10 flex-col lg:flex-row text-gray-200 overflow-hidden'>
            <div className=' group flex flex-col px-5 py-5 gap-4 bg-opacity-10 backdrop-blur-lg rounded-2xl w-[288px] h-[200px] bg-white/10 hover:bg-white/20'>
              <PiBracketsAngleBold size={30} className='text-[#3d99be] group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-300'/>
              <h1 className='text-xl font-semibold'>Web Development</h1>
              <p className='font-light text-[#aeaeae] '> Proficient in building robust and scalable web applications using modern technologies. </p>
            </div>
            <div className=' group flex flex-col px-5 py-5 gap-4 bg-opacity-10 backdrop-blur-lg rounded-2xl w-[288px] h-[200px] bg-white/10 hover:bg-white/20'>
              <PiCurrencyEthBold size={30} className='text-[#3d99be] group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-300'/>
              <h1 className='text-xl font-semibold'>Trading </h1>
              <p className='font-light text-[#aeaeae] '> Experienced in trading and navigation the intersection of traditional finance and Web3. </p>
            </div>
        </div>
        </div>
        <div className='flex flex-col space-y-10 '>
          <div className='space-y-3 font-thin text-[#aeaeae]'>
            <p className='break-words'>
            I have been a passionate <strong className='text-white'>Software Engineer</strong>  for <strong>4 years</strong> now, and i am currently seeking a role in an IT company to enhance my skills, gain experience, and contribute to technological advancement in Nigeria and Africa.
            </p>
            <p>
            My journey into tech began with my encounter with my friend and mentor <strong className='text-white'>Mr Samuel Rukevwe Simon</strong> . His Professionalism and guidiance led me into the wonderful world of technology and sparked my curiousity to exploring various programming languages and frameworks. Through self-study and practical projects, I've developed a strong foundation in frontend development.
            </p>
            <p>
            When I'm not coding, you'll find me playing video games, studying,scouring the Trading market, or exploring new technologies . I believe in continuous learning and staying updated with the latest tech trends.
            </p>
          </div>
          <div className='space-y-3  sm:w-full h-full '>
            <h1 className='text-4xl '>Tech Stack</h1>
            <div className='space-x-2 flex flex-row w-full items-center flex-wrap'>
            <p className={`${stack}`}>PYTHON</p>
            <p className={`${stack}`}>TYPESCRIPT</p>
            <p className={`${stack}`}>JAVASCRIPT</p>
            <p className={`${stack}`}>NEXTJS</p>
            <p className={`${stack}`}> REACT</p>
            <p className={`${stack}`}>TAILWINDCSS</p>
            <p className={`${stack}`}>CSS3</p>
            <p className={`${stack}`}>FIREBASE</p>
            <p className={`${stack}`}>DOCKER</p>
            <p className={`${stack}`}>REACT NATIVE</p>

            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About