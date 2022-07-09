import React from 'react'
import '../style.css'

function Footer() {
    return (
        <footer>
        <div id="contact" class ="contact">
            <h3>Contact</h3>
        </div>
            <div class="contact-info">
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
    </footer>
    )
}

export default Footer