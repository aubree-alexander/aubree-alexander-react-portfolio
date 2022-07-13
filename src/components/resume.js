import React from 'react'
import '../style.css'
import resume from '../Alexander-resume.pdf'

//AA - w-100 is not working below
function Resume() {
    return (
        <div id='resume-page'>
            <p id='skills-intro-text' className='text-center py-5 fade-in-text'>I am able to work with the following: </p>
            <ul className='text-center list-unstyled card-columns fade-in-text'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Git</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Jquery</li>
                <li>SQL</li>
                <li>Sequelize</li>
                <li>Express.js</li>
                <li>NoSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>React</li>
            </ul>
        <div className='text-center py-5 fade-in-text'>
           <p>View my full resume here: </p>
           <a href={resume} download>Click to download</a>
        </div>
        </div>
    )
}

export default Resume