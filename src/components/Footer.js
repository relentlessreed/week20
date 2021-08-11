import React from 'react'

function Footer() {
    // const footerText = <div className="footer">
    //     Github
    //     <i class="fab fa-github"></i> Linked
    //     <i class="fab fa-linkedin"></i> Twitter
    //     <i class="fab fa-twitter"></i>Made with ❤ © 2021</div>;
    return (
        <div className="footer">
            <div>
                <a href="https://github.com/relentlessreed" target="_blank" rel="noreferrer">Github<i class="fab fa-github"></i></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/reed-edward" target="_blank" rel="noreferrer">Linked<i class="fab fa-linkedin"></i></a>
            </div>
            <div>
                <a href="https://twitter.com/TheWhiteEdReed" target="_blank" rel="noreferrer">Twitter<i class="fab fa-twitter"></i></a>
            </div>
            <div>
                {/* <h2>{footerText}</h2> */}
                <h2>Made with ❤ © 2021</h2>
            </div>
        </div>
    )
}

export default Footer;