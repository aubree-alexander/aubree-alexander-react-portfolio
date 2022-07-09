import React from 'react'
import '../style.css'

function Resume() {
    return (
        <div>
           View my resume here:
           {/* AA - this download is 'working' but no file downloads */}
           <a href='./Alexander-resume.pdf' download>Click to download</a>
        </div>
    )
}

export default Resume