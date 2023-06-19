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
                        <h1 className='text-2xl font-bold inline border-b-2 border-[#B3DEC1]'>Full Stack Developer</h1>
                        <h3>Anxilla</h3>
                        <h5>2023/06 - Current </h5>
                        <p> -Developed responsive webpages for clients using bootstrap and flask</p>
                    </li>
                    <br />
                    <li>
                        <h1 className='text-2xl font-bold inline border-b-2 border-[#B3DEC1]'>Full Stack Developer Intern</h1>
                        <h3>Anxilla</h3>
                        <h5>2022/04 - 2022/08 </h5>
                        <p>-Built login and signup details and stored user data to MySQL DB with MYSQL workbench. </p>
                        <p>-Implemented a webpage with a form and dropzone to upload multiple images attached with form data, saving form data and file information to DB, and created a separate page listing image details and images within a carousel.</p>
                        <p>-Created a user landing page that retrieves user details from DB and renders the page with unique user information using Flask and Jinja2 Templates.</p>
                    </li>
                    <br />
                    <li>
                        <h1 className='text-2xl font-bold inline border-b-2 border-[#B3DEC1]'>Business Intelligence Intern</h1>
                        <h3>Canadian Air Transport Security Authority (CATSA)</h3>
                        <h3>Ottawa, ON</h3>
                        <h5>2022/04 - 2022/08 </h5>
                        <p>-Drafted strategic business intelligence roadmap, complete with data governance policies and tactical information safeguards.</p>
                        <p>-Implemented a more secure modern cloud-based system for intra-company data access requests.</p>
                        <p>-Modeled trends using PowerBI.</p>
                        <p>-Created an online portal with over 500 verified contacts across all Canadian airports.</p>
                    </li>
                    <br />
                    <li>
                        <h1 className='text-2xl font-bold inline border-b-2 border-[#B3DEC1]'>	Product Development Intern</h1>
                        <h3>Revemax</h3>
                        <h3>Oakville, ON</h3>
                        <h5>2021/04 - 2021/08 </h5>
                        <p>-Collaborated with manufacturers, operations leaders, and sales teammates to ascertain production details to comply with product BRD.</p>
                        <p>-Collected and cleaned airline data across 15 data streams to process forecasting models using python and ML libraries</p>
                        <p>-Maintained quality assurance through thorough testing and validation of products</p>
                    </li>   
                    <br /> 
                    <li>
                        <h1 className='text-2xl font-bold inline border-b-2 border-[#B3DEC1]'>Student Intern</h1>
                        <h3>Trillium Health Partners</h3>
                        <h3>Missisauga, ON</h3>
                        <h5>2020/08 - 2020/10 </h5>
                        <p>-Worked with doctors and nurses to identify key issues in the new digital health-tech system</p>
                        <p>-Identified bugs and errors during the implementation phase to help with new system changes throughout 3 major hospitals</p>
                    </li>                  
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
