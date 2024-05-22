import React from 'react'
import Logo from '../assets/logo.png'
// import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="page_width">
            <header>
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="div_explore">
                <input
                type="text"
                placeholder="Want to learn?"
                className="input_explore"
              />
              <input
                className="btn_explore"
                type="button"
                value="Explore"
              />
                </div>
                <div className="nav_links">
                    <ul>
                        <li>
                            <a href>Home</a>
                        </li>
                        <li>
                            <a href>About Us</a>
                        </li>
                        <li>
                            <a href>Courses</a>
                        </li>
                        <li>
                            <a href>Contact us</a>
                        </li>
                        <li>
                            <a href>FAQ's</a>
                        </li>
                        <li>
                            <a href></a>
                        </li>
                        <li>
                            <a href>Sign in</a>
                        </li>
                        <li className="btn_create_account">
                            <a href>Create free account</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default Header