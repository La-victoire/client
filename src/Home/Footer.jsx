import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
const Footer = () => {
  function getCurrentYear() {
  return new Date().getFullYear();
}
  return (
    <>
    <div>
      <p className='text-3xl pt-5 text-center'>Have a Coffee With Me</p>
      <div className='flex justify-center items-center'>
        <div className='w-4/6 py-10 flex justify-evenly'>
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
      </div>
    </div>
    <div className='text-center pt-5'>
      <p>©{getCurrentYear()} Oghuvbu Victory. All rights reserved.</p>
      <p>Made With React and TailwindCSS</p>
    </div>
    </>
  )
}

export default Footer