import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <NavLink to='/' onClick={() => props.goingToPage('home')}><h1 className="site-title" >Petstrology</h1></NavLink>
            <NavLink to='/' onClick={() => props.goingToPage('home')}>Home</NavLink>
            <NavLink to='/FindYourSigns' className="saved-signs-btn">Find Your Signs</NavLink>
        </header>
    )
}

export default Header; 