import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className='header-container d-flex align-items-center flex-column'>
            <h1 className='title'>Employee Directory</h1>
            <p className='sub-title'>Search for an employee below!</p>
        </div>
    )
}

export default Header;