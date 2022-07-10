import React from 'react'
import Project from './project'
import '../style.css'

function Portfolio() {
    return (
        <div id='my-projects'>
            <div id='my-projects-title'>
                <h1 className='fade-in-text'>My projects</h1>
            </div>
            <Project></Project>
        </div>
    )
}

export default Portfolio