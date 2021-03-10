import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ goingToPage }) => {
    return (
        <footer>
            <Link 
                to='/About' 
                className='footer-link' 
                onClick={() => goingToPage('away')}
            >
                ABOUT
            </Link>
            <Link 
                to='/Contact' 
                className='footer-link' 
                onClick={() => goingToPage('away')}
            >
                CONTACT
            </Link>
        </footer>
    )
}

export default Footer; 

Footer.propTypes = {
    goingToPage: PropTypes.func,
}