import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = ({ goingToPage, atHome, atFindSign }) => {
    return (
        <header>
            <NavLink 
                to='/' 
                onClick={() => goingToPage('atHome')}
                >
                    <h1 className="site-title" >Petstrology</h1>
            </NavLink>
            {!atHome && 
                <NavLink 
                    to='/' 
                    className="home-link" 
                    onClick={() => goingToPage('atHome')}
                    >
                    BACK TO ALL SIGNS
                </NavLink>}
            {!atFindSign && 
                <NavLink 
                    to='/FindYourSigns' 
                    className="saved-signs-link" 
                    onClick={() => goingToPage('atFindSign')}
                    >
                    FIND YOUR SIGNS
                </NavLink>}
        </header>
    )
}

export default Header; 

Header.propTypes = {
    goingToPage: PropTypes.func,
    atHome: PropTypes.bool,
    atFindSign: PropTypes.bool
}