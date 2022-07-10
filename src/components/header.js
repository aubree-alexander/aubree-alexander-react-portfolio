import React from 'react'
import Navigation from './navigation'
import '../style.css'

function Header() {
    return (
        <div className='text-center' id='header'>
            <h1>Aubree Alexander, full-stack web developer</h1>
            <Navigation></Navigation>
        </div>
    )
}

export default Header