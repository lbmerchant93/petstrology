import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = ({ goingToPage, atHome }) => {
    return (
        <header>
            <NavLink to='/' onClick={() => goingToPage('home')}><h1 className="site-title" >Petstrology</h1></NavLink>
            {!atHome && <NavLink to='/' className="home-link" onClick={() => goingToPage('home')}>BACK TO ALL SIGNS</NavLink>}
            <NavLink to='/FindYourSigns' className="saved-signs-link" onClick={() => goingToPage('away')}>FIND YOUR SIGNS</NavLink>
        </header>
    )
}

export default Header; 

Header.propTypes = {
    goingToPage: PropTypes.func,
    atHome: PropTypes.bool
}