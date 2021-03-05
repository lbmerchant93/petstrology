import React from 'react';
import { Link } from "react-router-dom";
import './Sign.css';

const Sign = (props) => {
    const { src, alt } = props.image;
    const signTitle = alt.toUpperCase();

    return (
        <Link 
            to={{
                pathname: `/Horoscope/${alt}/Today`,
                state: {src, alt, signTitle}
            }} 
            className='sign-link'
        >
            <article className='all-star-signs'>
                <h2 className='sign-title'>{signTitle}</h2>
                <img src={src} className='sign-img' alt={alt}/>
            </article>
        </Link>
    )

}

export default Sign;