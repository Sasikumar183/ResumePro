import React from 'react';
import { FaPhone, FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Logo from './avatar.jpg';
import './Resume.css'; // Import custom CSS for additional styling

const Resume = () => {
  return (
    <>
    <div className='text-right mt-8 '>
        <a href='/resume.pdf' download className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700'>
          Download Resume
        </a>
      </div>
     <div className='resume-container p-8 bg-white text-gray-800 border my-16'>
      
      <header className='text-center mb-8 border-b border-gray-300 pb-4'>
        <img src={Logo} alt="Logo" width={200} className='mx-auto mt-[-30px]'/>
        <h1 className='text-blue-600'>SASIKUMAR N</h1>
        <p>Mangalam, Tiruppur, Tamilnadu</p>
        <p>
          <FaPhone className='inline text-blue-600 mr-2' /> +91 90253 14903
        </p>
        <p>
          <FaEnvelope className='inline text-blue-600 mr-2' /> sasikumar.n2021it@gmail.com
        </p>
        <p>
          <FaGlobe className='inline text-blue-600 mr-2' />
          <a href='https://sasikumar183.netlify.app' target='_blank' rel='noopener noreferrer' className='text-blue-600'>
            https://sasikumar183.netlify.app
          </a>
        </p>
        <p>
          <FaGithub className='inline text-blue-600 mr-2' />
          <a href='https://github.com/Sasikumar183' target='_blank' rel='noopener noreferrer' className='text-blue-600'>
            https://github.com/Sasikumar183
          </a>
        </p>
      </header>

      {/* Download Button */}
      

      {/* Main Content */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Left Column */}
        <div className='space-y-6'>
          {/* Summary */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Summary</h2>
            <p>
              Looking for an engaging position where I can utilize my technical skills, innovative
              problem-solving abilities, and enthusiasm for pushing boundaries to drive organizational
              advancement and achievement.
            </p>
          </section>

          {/* Education */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Education</h2>
            <ul className='list-disc ml-6'>
              <li>
                Jai Shriram Engineering College, BE CSE (2025 pursuing)
                <br />
                9.20 CGPA (till 5th semester)
              </li>
              <li>GHSS Mangalam, HSC (2021) - 90.2%</li>
              <li>GHSS Mangalam, SSLC (2019) - 83.8%</li>
            </ul>
          </section>

          {/* Skills */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Skills</h2>
            <ul className='list-disc ml-6'>
              <li>Front-End: HTML, CSS, JavaScript</li>
              <li>Framework and Library: Tailwind CSS, React.js</li>
              <li>Programming Languages: C, Java, Python</li>
              <li>Backend: PHP, SQL</li>
              <li>Tools: Git, GitHub</li>
            </ul>
          </section>

          {/* Projects */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Projects</h2>
            <ul className='list-disc ml-6'>
              <li>
                <strong>Portfolio:</strong> Created a portfolio website with React.js, highlighting projects
                and skills. Designed for user-friendly navigation and responsiveness across devices.
              </li>
              <li>
                <strong>Gadget Galaxy:</strong> Built Gadget Galaxy, an e-commerce platform for electronic
                gadgets, using HTML, CSS, and JavaScript. Designed a responsive frontend interface for
                intuitive product browsing.
              </li>
              <li>
                <strong>Info Craft:</strong> InfoCraft powered by Flask, orchestrates seamless data operations,
                allowing users to Create, Read, Update, and Delete information, providing a streamlined and
                responsive experience for efficient data management.
              </li>
              <li>
                <strong>Routex:</strong> Created a college chatbot using Flask and Deep Learning technologies,
                enabling quick navigation for students and staff to locate departments and classes effortlessly.
              </li>
            </ul>
          </section>

          {/* Achievements & Awards */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Achievements & Awards</h2>
            <ul className='list-disc ml-6'>
              <li>1st Rank during the Academic year 2021-2022.</li>
              <li>Silver badge in Programming in Java and Cloud Computing from NPTEL.</li>
              <li>Gold badge in Python programming on HackerRank.</li>
              <li>1st place in Code Dilemma competition at Karpagam College.</li>
              <li>2nd prize in code debugging and UI/UX at Rathinam Campus.</li>
              <li>2nd prize in Quantum Code2k23.</li>
            </ul>
          </section>

          {/* Certifications */}
          
        </div>

        {/* Right Column */}
        <div className='space-y-6'>
          {/* Participations */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Participations</h2>
            <ul className='list-disc ml-6'>
              <li>INFOCRUISE 2K23 at Kongu Engineering College.</li>
              <li>Quantum Code 2k22, 2k23 at Jai Shriram Engineering College.</li>
              <li>Presentation on Blockchain Technology at RVS College of Engineering and Technology.</li>
              <li>TEKOZURA 2K23 at Dr NGP Institute of Technology.</li>
              <li>VARNAM’24 at Karpagam Institute of Technology.</li>
            </ul>
          </section>

          {/* In-Plant Training */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>In-Plant Training</h2>
            <ul className='list-disc ml-6'>
              <li>Python Programming at Emglitz Technologies, Coimbatore (2022).</li>
              <li>Web Designing at Launch Web Dreams, Tiruppur (2023).</li>
              <li>Python Full Stack at NXT Logic, Coimbatore (2024).</li>
            </ul>
          </section>

          {/* Workshop Attended */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Workshop Attended</h2>
            <ul className='list-disc ml-6'>
              <li>Workshop on PowerBi and Tableau at Jai Shriram Engineering College.</li>
              <li>Workshop on CI Deployment with AWS at Jai Shriram Engineering College.</li>
            </ul>
          </section>

          {/* Area of Interest */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Area of Interest</h2>
            <ul className='list-disc ml-6'>
              <li>Full Stack Development</li>
              <li>Cloud Computing</li>
              <li>Block Chain Technology</li>
            </ul>
          </section>

          {/* Certifications */}
          <section className='resume-section'>
            <h2 className='text-blue-600'>Certifications</h2>
            <ul className='list-disc ml-6'>
              <li>Python and Java Basic - HackerRank</li>
              <li>Programming in Java - NPTEL</li>
              <li>Cloud Computing - NPTEL</li>
              <li>HTML and CSS - Letsupgrade</li>
              <li>Introduction to JavaScript and PHP - Sololearn</li>
              <li>React JS - Udemy</li>
              <li>Tailwind CSS - Udemy</li>
            </ul>
          </section>
          <section className='resume-section'>
            
            <h2 className='text-blue-600'>Declaration</h2>
            <p>
              I affirm the veracity and precision of the information provided above to the utmost of
              my knowledge and belief.
            </p>
          </section>
        </div>
      </div>
    </div>

    </>
  );
}

export default Resume;
