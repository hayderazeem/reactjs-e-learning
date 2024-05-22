import React from 'react'
import Logo from '../assets/logo.png'
import Twitter from '../assets/twitter.png'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Facebook from '../assets/facebook.png'
import Dribbble from '../assets/dribbble.png'

const Footer = () => {
    return (
        <footer>
            <div className="page_width">
                <div className="inner_footer">
                    <div className="div_img"><img src={Logo} alt="" width= "79.83px" height= "72px"/><p>Top learning experiences that create more talent in the world.</p></div>
                    <div className="div_ul">
                    <ul>
                        <li>
                            <a href className='li_heading'>Product</a>
                        </li>
                        <li>
                            <a href>Overview</a>
                        </li>
                        <li>
                            <a href>Features</a>
                        </li>
                        <li>
                            <a href>Solutions</a>
                        </li>
                        <li>
                            <a href>Tutorials</a>
                        </li>
                        <li>
                            <a href>Pricing</a>
                        </li>
                        
                    </ul>
                    </div>
                    <div className="div_ul"><ul>
                        <li>
                            <a href className='li_heading'>Company</a>
                        </li>
                        <li>
                            <a href>About us</a>
                        </li>
                        <li>
                            <a href>Careers</a>
                        </li>
                        <li className='li_press'>
                            <a href>Press <span>New</span></a>
                        </li>
                        <li>
                            <a href>News</a>
                        </li>
                        
                        
                    </ul></div>
                    <div className="div_ul"><ul>
                        <li>
                            <a href className='li_heading'>Social</a>
                        </li>
                        <li>
                            <a href>Twitter</a>
                        </li>
                        <li>
                            <a href>LinkedIn</a>
                        </li>
                        <li>
                            <a href>GitHub</a>
                        </li>
                        <li>
                            <a href>Dribbble</a>
                        </li>
                    
                        
                    </ul></div>
                    <div className="div_ul"><ul>
                        <li>
                            <a href className='li_heading'>Legal</a>
                        </li>
                        <li>
                            <a href>Terms</a>
                        </li>
                        <li>
                            <a href>Privacy</a>
                        </li>
                        <li>
                            <a href>Cookies</a>
                        </li>
                        <li>
                            <a href>Contact</a>
                        </li>
                                               
                    </ul></div>
                </div>
                <div className='copyright'><p>© 2022 Ed-Circle. All rights reserved.</p>
             <div className="social_media">    <img src={Twitter} alt="" width= "24px" height= "24px"/>
                <img src={Linkedin} alt="" width= "24px" height= "24px"/>
                <img src={Facebook} alt="" width= "24px" height= "24px"/>
                <img src={Github} alt="" width= "24px" height= "24px"/>
                <img src={Dribbble} alt="" width= "24px" height= "24px"/></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer