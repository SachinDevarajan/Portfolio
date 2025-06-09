import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"


const Experience = () => {
    const cartItems=[
       {
        id:1,
        logo:html,
        name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
        },
        {
            id:3,
            logo:javascript,
            name:"JavaScript"
            },
            {
                id:4,
                logo:react,
                name:"React"
            }
    ]
  return (
    <div className='max-w-screen container mx-auto px-4 md:px-20 my-20'>
        <div>
      <h1 className='text-3xl font-bold mb-5'>Skill</h1>
      <p className='font-bold'> i have experience below technologies</p>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-7 my-3'>
        {
            cartItems.map(({id,logo,name})=>(
                <div className='flex flex-col items-center border-[2px] rounded-full shadow-mg md:w-[300px] md:h-[160px]  p-1 cursor-pointer hover:scale-110 duration-300' 
                key={id}>
                    <img src={logo} className='w-[120px] h-[120px] rounded-full' alt="" />
                    <div>
                        <div className='font-semibold  mb-2 px-2'>{name}</div>
                    </div>
                                   
                </div>
            ))
        }
      </div>
    </div>
    </div>
  )
}

export default Experience
