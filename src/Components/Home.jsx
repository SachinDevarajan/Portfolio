import React from 'react'
import pic from '../assets/image.jpeg'

import { FaNodeJs, FaReact, FaSquareFacebook } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa6'

import { FaGithub } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'

import { ReactTyped, Typed } from 'react-typed'

const Home = () => {
  return (
    <>
    <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
            <h1>Hello, I'm a</h1>
            {/*<span className='text-blue-700 font-bold'>Developer</span>*/}
            <ReactTyped className='text-blue-700 font-bold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                />
            </div>
            <p className='text-sm md:text-md'>
                Web developer in front-end technologies,proplem solving and building responsive websites.</p>
            <br />
            {/*social media icons */}
            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
            <div className='space-y-2'>
                <h1 className='font-bold '>Available on</h1>
                <ul className='flex space-x-5'>
                    <li>
                        <a href="https://www.facebook.com" tarket="_blank">
                     <FaSquareFacebook className='text-2xl cursor-pointer'/>
                     </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com" tarket="_blank">
                    <FaLinkedin className='text-2xl cursor-pointer'/>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.telegram.com" tarket="_blank">
                    <FaTelegram className='text-2xl cursor-pointer'/>
                    </a>
                    </li>
                    <li>
                    <a href="https://www.github.com" tarket="_blank">
                    <FaGithub className='text-2xl cursor-pointer'/>
                    </a>
                    </li>
                </ul>
            </div>
            <div className='space-y-2'>
            <h1 className='font-bold'>Currently working On</h1>
                <ul className='flex space-x-5'>
                   <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                   <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
                   <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>       
                </ul>
            </div>
            </div>
        </div>
        <div className='md:w-1/2 md:ml-40 md:mt-16 mt-7 order-1' >
            <img src={pic} className='rounded-full md:w-[400px] md:h-[400px]' alt="" />
        </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home
