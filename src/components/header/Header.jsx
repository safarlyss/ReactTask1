import React from 'react'
import '../../assets/css/header.css'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className=" d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <nav>
                        <ul className='d-flex'>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Pages</li>
                            <li>Sites</li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}

export default Header
