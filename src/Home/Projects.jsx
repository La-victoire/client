import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState([]);
  const {projRef} = useOutletContext();
 useEffect(() => {
  const Fetch = async () => {
  try {
    const response = await fetch("/projects.json")
    if (!response.ok) 
      {throw new Error(`Error Retrieving Data, Current Status: ${response.status}`)}
    const data = await response.json() 
    setProject(data)
    console.log(data);
    
  } catch (Error){
    console.log("Error fetching data")
    console.error(Error);
  }}
  Fetch();   
}, [])

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      setIsVisible(true);
    },
    {
      root: null, // Observe within the viewport
      threshold: 0.2, // Trigger when 20% of the element is visible
    }
  );

  if (projRef.current) {
    observer.observe(projRef.current);
  }

  return () => {
    if (projRef.current) {
      observer.unobserve(projRef.current);
    }
  };
}, []);

  return (
    <>
    <div className='lg:px-16 px-10 ' >
    <h1 className='text-4xl'>
      Projects
    </h1>
    <h2 className='my-3 text-lg '>
      These are some of the projects i've worked on over the years...
    </h2>
    <div className="min-h-screen bg-transparent bg-opacity-20 backdrop-blur-lg p-6">
      <div  
      className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.map((project, index) => (
          <div
            ref={projRef}
            key={index}
            style={{animationDelay: `${index * 0.5}s`, animationFillMode: 'both'}}
            className={`flex flex-col shadow-lg rounded-t-3xl py-5 bg-white/5 items-center overflow-hidden hover:scale-105  transition-all duration-700 ease-in-out transform ${isVisible ? 'animate-fadeSlide' : 'hidden '}`}>
            
            <img
              src={project.image}
              alt={project.Name}
              className="w-[175px] lg:w-[350px] rounded-lg lg:h-48 h-24"
            />
            <div className="flex flex-col items-center w-10/12">
              <h3 className="text-lg font-light py-2 mb-2">
                {project.Name}
              </h3>
              <p className="text-[#aeaeae] pb-5 lg:w-9/12 w-full flex flex-wrap text-sm">
                {project.description}
              </p>
              <div className='flex justify-between w-9/12 font-thin text-sm'>
              <p className=''>Live < FaCircle size={9} className='text-green-500 mx-3 inline' /></p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-thin text-[#aeaeae] "
              >
                Visit Site <FaExternalLinkAlt className='inline ' size={13} />
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div> 
    </div>
    </>
  )
}

export default Projects