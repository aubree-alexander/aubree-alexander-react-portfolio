import React from 'react'
import '../style.css'
import {Link} from 'react-router-dom'

//AA - DO THE LINK PORTION FOR ALL NAV ITEMS
function Navigation() {
    return (
        <div id='navigation'>
            <ul className='nav justify-content-center'>
                <Link to = '/home'>
                <li className='nav-item p-2'>
                    About Me
                </li>
                </Link>
                <li className='nav-item p-2'>
                    <a href='/contact'>Contact</a>
                </li>
                <li className='nav-item p-2'>
                    <a href='/portfolio'>Portfolio</a>
                </li>
                <li className='nav-item p-2'>
                    <a href='/resume'>Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation