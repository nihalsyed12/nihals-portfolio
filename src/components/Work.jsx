import React from 'react'
import Guerila from '../assets/projects/Guerilla.jpg'
import AgeNGender from '../assets/projects/webcam_result.PNG'
import Graffitex from '../assets/projects/Graffitex.jpg'

const Work = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#345983]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
            <p className='py-6'>// Check out some of my recent projects</p>
            <ol>
                <li>
                    -Guerila is augmented reality street art, like pokemon go but with user generated content.
                </li>
                <li>-Graffitex is an augmented reality spray painting app, turning your phone into a spray can and allowing you to add graffiti anywhere you want</li>
                <li>-Age and Gender predictor is able to predict your age and gender through your webcam with real time feedback</li>
            </ol>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
            <div style={{ backgroundImage: `url(${Guerila})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Guerila
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://youtu.be/3J0eiC3deHA'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        {/* <a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a> */}
                    </div>
                </div>
            </div>
             {/* Grid Item */}
            <div style={{ backgroundImage: `url(${Graffitex})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Graffitex
                    </span>
                    <div className='pt-8 text-center'>
                        <a href='https://www.youtube.com/shorts/ry9UzO52Y7U'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href='https://github.com/Tim-gubski/Graffitex'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* Grid Item */}
            <div style={{ backgroundImage: `url(${AgeNGender})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Age and Gender <br></br>Predictor
                    </span>
                    <div className='pt-8 text-center'>
                        {/* <a href='https://github.com/nihalsyed12/Age_Gender_Model'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a> */}
                        <a href='https://github.com/nihalsyed12/Age_Gender_Model'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
     
        </div>

      </div>
    </div>
  )
}

export default Work
