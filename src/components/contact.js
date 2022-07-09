import React from 'react'
import '../style.css'

function Contact() {
    return (
        <div>
            <div id="contact" className ="contact">
            <h3>Contact</h3>
            </div>
                <div className="contact-info">
                    <ul>
                        <li>
                            <a href="mailto:aubree.alexander@gmail.com">aubree.alexander@gmail.com</a>
                        </li>
                        <li>
                            608.692.5277
                        </li>
                        <li>
                            <a href="https://github.com/aubree-alexander" target="_blank">GitHub</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/aubree-alexander-223a3518a' target="blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Contact