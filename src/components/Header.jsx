// Header.js
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../assets/Page_1/Logo.png';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import Togglemenu from '../pages/Togglemenu';
import Animation from './Animation';
import '../Css/header.css'
const Header = ({ headerRef }) => {
    // const ref = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className='header' id='#header' ref={headerRef} >
            <div className='container'>
                <Animation transition={{ duration: 0.3, delay: 0.25 }}>

                    <motion.div className='logo'  >
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <div className='info'>
                            <h5>Mohammad Alkhawaldeh</h5>
                            <span>Freelance 2D&3D Motion Designer</span>
                        </div>
                    </motion.div>
                </Animation>
                <Animation transition={{ duration: 0.3, delay: 0.25 }}>

                    <motion.nav >
                        <div className={`toggle-menu `} onClick={toggle}>
                            {isMenuOpen ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
                        </div>

                        <ul className={`${isMenuOpen ? 'toggle ' : ''}`}>
                            <li><Link to="/" >Personal Portfolio</Link></li>
                            <li><Link to="/Courses">Courses</Link></li>
                            <li><Link to="/bio">Bio</Link></li>
                        </ul>
                    </motion.nav>
                </Animation>
            </div>
            {isMenuOpen && <Togglemenu isOpen={isMenuOpen} onClick={toggle} />}
        </div>
    );
};

export default Header;
