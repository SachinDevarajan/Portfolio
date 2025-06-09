import React from 'react'
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"

const Portfolio = () => {
    const cartItems=[
       {
        id:1,
        logo:react,
        name:"React"
        },
        {
            id:2,
            logo:nodejs,
            name:"NodeJS"
        }
    ]
  return (  
    <div name='Projects' className='max-w-screen container mx-auto px-4 md:px-20 my-20'>
        <div>
      <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
      <span className='underline font-bold'> Featured Project</span>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        {
            cartItems.map(({id,logo,name})=>(
                <div className='md:w-[300px] md:h-[220px] border-[2px] rounded-1g shadow-1g p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-[2px]'  alt="" />
                    <div>
                        <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                    </div>
                    <div className='px-4 py-4 space-x-4 justify-around'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                    </div>                    
                </div>
            ))
        }
      </div>
    </div>
    </div>
  )
}

export default Portfolio
