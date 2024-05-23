import React from 'react'
import Section from './common/Section'
import {FaGithub} from 'react-icons/fa'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.jpg'
/*


import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg' */


const Portfolio = () => {

    const project = [
        {
            id : 1,
            Image : p1,
            title : "visitor and Gatepass Managament System",
            about : "Technology Used : MERN stack",
            github : "https://github.com/mohamedmusky/gatepass-managment-system-rupawahini-",
            demo : "/"
        },
        {
            id : 2,
            Image : p2,
            title : "Student Voting System",
            about : "Technology Used :C# in Visual Studio , Mysql ",
            github : "https://github.com/mohamedmusky/students",
            demo : "/"
        },
        {
            id : 3,
            Image : p3,
            title : "Pharmacy Invoice System",
            about : "Technology Used :Reactjs,Golang,Postgresql ",
            github : "https://github.com/mohamedmusky/invoice-application-reactjs-golang-postrgresql-",
            demo : "/"
        },
        {
            id : 4,
            Image : p4,
            title : "Goal Add mobile app",
            about : "Technology Used :ReactNative,Expo Go ",
            github : "https://github.com/mohamedmusky/Goal-add-mobile-app",
            demo : "/"
        },
 
        
    ]

  return (
    <div name="portfolio">
    <Section title="Portfolio 💼" subtitle="These are all the project that i have worked on. Some of them I have worked before i gained experience. So go gentle on them"
    >

    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {project.map(({id, Image, title,about, github, demo })=>(
            <div key={id} 
                className='max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden hover:scale-110'>

                <img src={Image} alt={title} className='w-2/3 '  />
                
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <p className=' max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base'>{about}</p>

                    <a  className = 'text-3xl cursor-pointer duration-150 hover:scale-110' href={github} target='_blank' rel='noopener noreferrer'>
                        <FaGithub />
                    </a>

                    
                </div>
            </div>
        ))}
    </div>

    </Section>
    </div>
  )

  
}

export default Portfolio