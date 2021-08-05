import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/resume'>Resume</Link>
        </div>
    )
}
