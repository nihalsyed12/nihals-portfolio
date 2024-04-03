import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#345983] text-gray-300 p-4'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='w-full max-w-[1000px] mx-auto'>
          <div className='text-center sm:text-right pb-8'>
            <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div className='text-center sm:text-left space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8'>
            <div>
              <p className='text-xl sm:text-2xl font-bold'>
                Hi. I'm Nihal, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
              <p>
                I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for engaging users and connecting people together. What would you do if you had a software expert available at your fingertips?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

