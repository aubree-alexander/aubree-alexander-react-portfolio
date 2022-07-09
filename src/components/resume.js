import React from 'react'
import '../style.css'
import resume from '../Alexander-resume.pdf'

function Resume() {
    return (
        <div>
           View my resume here:
           <a href={resume} download>Click to download</a>
        </div>
    )
}

export default Resume