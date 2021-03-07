import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <NavLink to='/' onClick={() => props.goingToPage('home')}><h1 className="site-title" >Petstrology</h1></NavLink>
            {!props.atHome && <NavLink to='/' className="home-btn" onClick={() => props.goingToPage('home')}>BACK TO ALL SIGNS</NavLink>}
            <NavLink to='/FindYourSigns' className="saved-signs-link" onClick={() => props.goingToPage('away')}>FIND YOUR SIGNS</NavLink>
        </header>
    )
}

export default Header; 