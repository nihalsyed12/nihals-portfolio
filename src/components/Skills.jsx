import React from 'react'

import Blender from '../assets/blender.png'
import Swift from '../assets/Swift.png'
import Javascript from '../assets/javascript.png'
import HTML from '../assets/html.png'
import Firebase from '../assets/firebase.png'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import Bootstrap from '../assets/bootstrap.png'
import Python from '../assets/python.jpg'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#233B58] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Blender} alt='Blender Icon' />
                    <p className='my-4'>Blender</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Swift} alt='Swift Icon' />
                    <p className='my-4'>Swift</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt='Javascript Icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML Icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS Icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Firebase} alt='Firebase Icon' />
                    <p className='my-4'>Firebase</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt='Bootstrap Icon' />
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='Github Icon' />
                    <p className='my-4'>Python</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
