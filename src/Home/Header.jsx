import React from 'react'
import '../index.css'
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import { BsShareFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { X } from 'lucide-react'

const Header = ({scroll}) => {
  const [dropDown, setDropDown] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)

  const handleDropDown = () => {
    setDropDown((prev)=> !prev)
  }

  return (  
 <>
 <div className='px-5 z-20 border-b items-center border-black py-8 text-white text-lg justify-between lg:justify-evenly bg-transparent bg-opacity-20 backdrop-blur-lg sticky top-0 flex space-x-2'>
 <div className='md:text-2xl text-base balme'>
  <span className='text-blue-300  text-3xl'  > [ </span>
  L a - V i c t o i r e <span className='text-blue-400  text-3xl' > ] </span>
  </div>
  <div className=' lg:flex hidden space-x-10'>
    <AiOutlineHome onClick={() => scroll("Home")}/>
    <CgProfile onClick={() => {scroll('Abt')}} />
    <BsShareFill onClick={() => {scroll('Proj')}}/>
    <AiOutlineMail/>
  </div>
  <div className='lg:flex hidden space-x-10 '>
    <a href="https://github.com/La-victoire">
      <FaGithub size={20}/>
    </a>
    <a href="https://www.linkedin.com/in/victory-oghuvbu-342889329/">
      <FaLinkedin size={20}/>
    </a>
    <a href="https://wa.link/5yj5hg">
      <FaWhatsapp size={20}/>
    </a>
    <a href="https://x.com/VOghuvbu ">
      <FaXTwitter size={20}/>
    </a>
  </div>
  <div className='lg:hidden flex space-x-10'>
    {!dropDown ? (
      <GiHamburgerMenu size={20} onClick={() =>{handleDropDown()}}/>
    ):(
      <div className=' border-b border-l border-black bg-[#aeaeae] bg-opacity-20 backdrop-blur-xl p-4 animate-slide-in text-[#aeaeae] font-light absolute top-1/2 left-[90%] transition-all duration-700 ease-in-out transform -translate-x-1/2'>
        <div onClick={()=>{handleDropDown()}}
        className='flex justify-end -translate-x-1 mb-2 cursor-pointer '>
          <X size={29} className='text-blue-400'/>
        </div>
        <div className='flex flex-col cursor-pointer space-y-2'>
        <p onClick={() => {scroll('Home')}}>Home</p>
        <p onClick={()=> {scroll('Abt')}}>About</p>
        <p onClick={()=>{scroll('Proj')}}>Project</p>
        <p onClick={()=> {scroll('Foot')}}>Contact Me</p>
        <a href="public/imgs/Oghuvbu_Victory_CV.pdf" download='Oghuvbu Victory C.V'>
        <p>Resume</p>
        </a>
          </div>
      </div>
    )}
  </div>
 </div>
    
  
  </>
  )
}

export default Header