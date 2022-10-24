import React from 'react'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
// import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import logo from '../../assets/logo.png'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import './FooterStyles.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    {/* <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </LinkRoll> */}

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        
                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Home</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/treatment'><p>Treatment</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/insurance'><p>Insurance</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/contact'><p>Contact</p></Link>
                        </LinkRoll>
                    </div>

                    <div className="col">
                        <h3>My Account</h3>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/mission'><p>Our Mission</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/about-us'><p>About Us</p></Link>
                        </LinkRoll>

                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/testimonials'><p>Testimonials</p></Link>
                        </LinkRoll>


                        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <Link to='/'><p>Programs</p></Link>
                        </LinkRoll>
                        
                    </div>
                    {/* <div className="col">
                        <h3>Information</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Home</p>
                        <p>Data</p>
                        <p>Cloud</p>
                        <p>Contact</p>
                    </div> */}
                    <form>
                        <h3>Join Our Team</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiDribbble className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
                <div><p>All Rights Reserved 2022 © Natural Rest House Inc.</p></div>
            </div>
        </div>
    )
}

export default Footer
