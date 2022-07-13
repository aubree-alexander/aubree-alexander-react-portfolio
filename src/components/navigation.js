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
                <Link to = '/contact'>
                <li className='nav-item p-2'>
                    Contact
                </li>
                </Link>
                <Link to ='/portfolio'>
                <li className='nav-item p-2'>
                    Portfolio
                </li>
                </Link>
                <Link to = '/resume'>
                <li className='nav-item p-2'>
                    Resume
                </li>
                </Link>
            </ul>
        </div>
    )
}

export default Navigation