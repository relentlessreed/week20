import React from 'react'

function Footer() {
    const footerText = <div className="footer">
        Github
        <i class="fab fa-github"></i> Linked
        <i class="fab fa-linkedin"></i> Twitter
        <i class="fab fa-twitter"></i>Made with ❤ © 2021</div>;
    return (
        <div className="footer">
            Github
            <i class="fab fa-github"></i>
            Linked
            <i class="fab fa-linkedin"></i>
            Twitter
            <i class="fab fa-twitter"></i>
            <br />
            <h2>{footerText}</h2>
        </div>
    )
}

export default Footer;