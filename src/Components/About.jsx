import React from 'react'

const About = () => {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
            Hello, i'm Sachin, a passionate web developer with a background in IT, adapt to learning, create impacful and visually stunning software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className='text-red-600 font-semibold text-xl'>Education & Training</h1>
        <span>
            MSc IT, Rathinam Collage Of Arts and Science, 2022-24,
            BSc CS, JJ Collage  Of Arts and Science, 2019-22
        </span>
        <br />
        <br />
        <h1 className='text-red-600 font-semibold text-xl'>Skill & Expertise </h1>
        <span>
            Skilled in crafting dynamic, responsive web application using Javascript. 
            Frameworks like react.js to create seamless user experience.
        </span>
    </div>
  )
}

export default About
