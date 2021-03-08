import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Link to='/About' className='footer-link'>ABOUT </Link>
            <p>Contact Info</p>
        </footer>
    )
}

export default Footer; 