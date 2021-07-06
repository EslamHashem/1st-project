import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "../Styles/Footer.css"

const date = new Date().getFullYear()


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <TelegramIcon />
                <LinkedInIcon />
            </div>
            <p> &copy; {date} pedrotecpizza.com </p>
        </div>
    )
}

export default Footer;
