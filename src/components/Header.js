import React from 'react'
import NavBar from './NavBar';
function Header() {
    const headerText = 'Edward Reed Full-Stack Web Developer';
    return (
        <div className="header">
            <h1>{headerText}</h1>
            {NavBar}
        </div>
    )
}

export default Header;