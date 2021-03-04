import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header>
            <NavLink to='/'><h1 className="site-title" >Petstrology</h1></NavLink>
            <button className="saved-signs-btn">My Saved Signs</button>
        </header>
    )
}

export default Header; 