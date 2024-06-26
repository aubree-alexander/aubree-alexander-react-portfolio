import React from 'react'
import '../style.css'
import resume from '../Alexander-Resume-2024.pdf'
import { Parallax } from 'react-parallax'

function Resume() {
    return (

        <Parallax blur={0} bgImage="https://img.freepik.com/premium-photo/white-grey-marble-texture-background-natural-pattern-with-high-resolution-tiles-luxury-stone-floor-seamless-glitter-interior-exterior_38607-418.jpg?w=2000" bgImageAlt="marble" strength={500}>

        <div id='resume-page' className='page-content-short'>
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
           <p id='view-resume'>View my full resume here: </p>
           <a href={resume} download>Click to download</a>
        </div>
        </div>

    <div style={{ height: '100px' }} />
    </Parallax>
    )
}

export default Resume