import React from 'react';
import './Sign.css';

const Sign = (props) => {
    const { src, alt } = props.image;
    const signTitle = alt.toUpperCase();
    
    return (
        <article className='all-star-signs'>
            <h2 className='sign-title'>{signTitle}</h2>
            <img src={src} className='sign-img' alt={alt}/>
        </article>
    )

}

export default Sign;