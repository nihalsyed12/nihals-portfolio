import React from 'react'

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-2flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
            <p className='py-4'>Carleton Univeristy, Computer Science Major (2018-2023)</p>

            <div>
                <ul>
                    <li>
                        <h1 className='text-2xl font-bold inline border-b-2 border-[#B3DEC1]'>Associate Software Engineer</h1>
                        <h3>Anxilla</h3>
                        <h5>2023/06 - Current </h5>
                        <p>-Integrated the AUTH and SALE APIs from a third-party payment gateway into the web application, employing Bootstrap for 
                            front-end, Flask for backend, and MySQL for the persistence layer. Commenced with a Python script to ensure API 
                            functionality, culminating in proposing the table schema to senior engineers before executing the full integration. </p>
                        <p> Developed key components-authentication, meal selection, and confirmation pages – within an e-commerce checkout 
                              flow. Employed HTML/CSS, Bootstrap for front-end, and Flask for backend routes, ensuring seamless interaction with the 
                              MySQL database</p>
                    </li>
                    <br />
                    <li>
                        <h1 className='text-2xl font-bold inline border-b-2 border-[#B3DEC1]'>Business Intelligence Intern</h1>
                        <h3>Canadian Air Transport Security Authority (CATSA)</h3>
                        <h3>Ottawa, ON</h3>
                        <h5>2022/04 - 2022/08 </h5>
                        <p> -Presented a comprehensive business intelligence roadmap, including data governance policies and tactical 
safeguards, to senior leadership. Implemented the chosen strategy and delivered a secure cloud-based system for intracompany data access requests using PowerBI. </p>
                        <p>-Implemented a more secure modern cloud-based system for intra-company data access requests.</p>
                        <p>-Successfully migrated and verified data for over 500 contacts across Canadian airports into a newly adopted online 
portal. </p>
                    </li>
                    <br />               
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
