import React from 'react'
import Vite from './assets/vite.svg'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

function end() {
    return (
        <div>
            <footer>
                <div id="container">
                    <div>
                        <h3>Spherenex</h3>
                        <p>Building Webpages</p>
                        <img src={Vite} id='img2'></img>
                        <p id='ctr'>Using VITE</p>
                    </div>

                    <div>
                        <h4>Quick links</h4>
                        <p id='link'>Home</p>
                        <p id='link'>About</p>
                        <p id='link'>Services</p>
                        <p id='link'>Login</p>
                        <p id='link'>Contact us</p>
                    </div>

                    <div>
                        <h4>Contact Us</h4>
                        {/* < className='mail'> */}
                            <p> <EmailIcon className='mail' /><span> spherenex@gmail.com</span></p>
                        <p><PhoneIcon className='mail'/><span> 9591868722</span></p>
                    </div>

                    <div>
                        <h4>Follow us</h4>
                        <p id='link'>< InstagramIcon className='mail' />Instagram</p>
                        <p id='link'><GitHubIcon className='mail' />Github</p>
                        <p id='link'><FacebookIcon className='mail' />Facebook</p>
                        <p id='link'>Twitter</p>
                    </div>
                    <p id='copyright'>
                        &copy; 2026 Spherenex. All rights reserved.
                    </p>
                </div>

            </footer>
        </div>
    )
}

export default end