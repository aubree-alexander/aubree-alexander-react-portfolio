import React from 'react'
import '../style.css'


// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'



// const element = <FontAwesomeIcon icon={faGithub} />



function Footer() {
    return (
        <footer className='bottom-stick position-sticky'>
        {/* <div id="contact" class ="contact">
            <h3>Contact</h3>
        </div> */}
            <div className="contact-info py-2 sticky-bottom">
                <ul>
                    <li>
                        <i class="fa-solid fa-envelope p-2"></i>
                        <a href="mailto:aubree.alexander@gmail.com">aubree.alexander@gmail.com</a>
                    </li>
                    <li>
                        <i class="fa-solid fa-phone-flip p-2"></i>
                        608.692.5277
                    </li>
                    <li>
                        <i class="fa-brands fa-github p-2"></i>
                        <a href="https://github.com/aubree-alexander" target="_blank">GitHub</a>
                    </li>
                    <li>
                        <i class="fa-brands fa-linkedin p-2"></i>
                        <a href='https://www.linkedin.com/in/aubree-alexander-223a3518a' target="blank">LinkedIn</a>
                    </li>
                </ul>
            </div>
    </footer>
    )
}

export default Footer