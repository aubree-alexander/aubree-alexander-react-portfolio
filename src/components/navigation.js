import React from 'react'
import '../style.css'
import {NavLink} from 'react-router-dom'

//AA - DO THE NavLink PORTION FOR ALL NAV ITEMS
function Navigation() {
    return (
        <div id='navigation'>
            <ul className='nav justify-content-center p-3'>
                <NavLink to = '/home'>
                    <li className='nav-item p-2'>
                        About Me
                    </li>
                </NavLink>
                <NavLink to = '/contact'>
                    <li className='nav-item p-2'>
                        Contact
                    </li>
                </NavLink>
                <NavLink to ='/portfolio'>
                    <li className='nav-item p-2'>
                        Portfolio
                    </li>
                </NavLink>
                <NavLink to = '/resume'>
                    <li className='nav-item p-2'>
                        Resume
                    </li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Navigation