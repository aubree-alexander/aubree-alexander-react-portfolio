import React from 'react'
import '../style.css'

function Navigation() {
    return (
        <div id='navigation'>
            <ul className='nav justify-content-center'>
                <li className='nav-item p-2'>
                    <a href='/home'>About Me</a>
                </li>
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