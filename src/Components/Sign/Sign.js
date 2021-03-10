import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './Sign.css';

const Sign = (props) => {
    const { src, alt } = props.image;
    const signTitle = alt.toUpperCase();
    
    return (
        <Link 
            to={{ pathname: `/Horoscope/${alt}` }} 
            className='sign-link'
            onClick={() => props.retrieveHoroscopeData(`https://aztro.sameerkumar.website/?sign=${alt}&day=today`, src, alt)}
        >
            <article className='all-star-signs'>
                <h2 className='sign-title'>{signTitle}</h2>
                <img src={src} className='sign-img' alt={alt}/>
            </article>
        </Link>
    )

}

export default Sign;

Sign.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    retrieveHoroscopeData: PropTypes.func
}