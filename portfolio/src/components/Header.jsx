import React from 'react'
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { useState } from 'react';
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({darkMode, setDarkMode}) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "technologies",
    },
    
    {
      id: 5,
      link: "certifications",
    },
    {
      id: 6,
      link: "contact",
    },
  ];
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white w-full h-20 px-4 fixed">
        <nav className='flex justify-between items-center p-5'>
          <a href="/">
            <h1 className="text-3xl font-signature  ml-2">MUSKY</h1>
            </a>
            <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
        


        <div onClick={()=> setDarkMode(!darkMode)}>

            {darkMode ? (
              <MdWbSunny className='text-2xl cursor-pointer' />
            ):
            (
              <MdNightsStay className='text-2xl cursor-pointer' />
            )}

            
  
        </div>
        </nav> 
    </header>
  )
}

export default Header