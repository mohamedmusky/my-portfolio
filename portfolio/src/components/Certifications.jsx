import React from 'react'
import Section from './common/Section'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'

/* import aquinas from '../assets/aquinas.jpg'
import nibm from '../assets/nibm.jpeg' */

const Certifications = () => {
    const INSTITUTE = [
        {
            id : 1,
            image : c1,
            name : "Programming Basics",
            comment :"Greatlearning Academy",
            link : "https://drive.google.com/file/d/1ya6PZKvrZ32w_h7wRECm7yqfkwNAXahK/view?usp=drive_link"
        },
        {
            id : 2,
            image : c2,
            name : "Java Programming",
            comment :"Greatlearning Academy",
            link : "https://drive.google.com/file/d/1_-KzST3gF7g0_UPitAJqOdhT93E0T22J/view?usp=drive_link"
        },
        {
            id : 3,
            image : c3,
            name : "Introduction to Database and SQL",
            comment :"Greatlearning Academy",
            link : "https://drive.google.com/file/d/1Hi1u43XxL6nvGgD7ZWp8yr2Njv9h-j-2/view?usp=drive_link"
        },
        {
            id : 4,
            image : s1,
            name : "Introduction to HTML",
            comment :"SOLOLEARN",
            link : "https://drive.google.com/file/d/1FB_-7Uf9dIwAnhNHY3ZPQgqN1nS5ALEe/view?usp=drive_link"
        },
        {
            id : 5,
            image : s2,
            name : "Introduction to JAVASCRIPT",
            comment :"SOLOLEARN",
            link : "https://drive.google.com/file/d/15avgjedrbKfUG6xKQYum5YYW0dPQ85eV/view?usp=drive_link"
        },
        

     
    ]

  return (
    <div name = "certifications">
    <Section title="Certifications 🎓" >
        
        <div>
            {INSTITUTE.map(({id, image, name, comment, link})=>(
                <a href={link} target='_blank' rel="noreferrer">
                <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                    <div className='w-2/3 '>
                        <img 
                            src={image} 
                            alt={name}
                            className='w-20 h-20 object-cover object-top pt-2' />
                    </div>

                    <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                        <h3 className='text-xl font-semibold'>{name}</h3>
                        <p className='text-sm font-extralight'>{comment}</p>
                    </div>
                </div>
                </a>
            ))}
        </div>
        
    </Section>
    </div>
  )
}

export default Certifications