import React from 'react'
function Header(props) {
    const headerText = 'Edward Reed Full-Stack Web Developer';
    return (
        <div className="header">
            <h1>{headerText}</h1>
            {props.children}
        </div>
    )
}

export default Header;