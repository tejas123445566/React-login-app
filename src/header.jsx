import React from 'react'
import Symbol from './assets/react.svg'
import EmailIcon from '@mui/icons-material/Email';
function header() {
  return (
    <div>
        <header>
            <div id = 'logo'>
                <img src= {Symbol} alt ="my-image" id ='img1' />
                Spherenex 
            </div>
            <nav>
                <ul>
                   <div className='home'>
                    <li>  <a a href="#Home">Home</a></li>
                    </div>
                    <li><a href="#About">About</a></li>
                    <li><a href="Reviews">Mails</a></li>
                    <li><a href="#Login">Login</a></li>
                </ul>
            </nav>
        </header>

     
    </div>
  )
}

export default header