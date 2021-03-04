import React from 'react';
import './Sign.css';

const Sign = (props) => {
    const { image } = props;
    
    return (
        <article className='all-star-signs'>
            <h2 className='sign-title'>CAPRICORN</h2>
            <img src={image} className='sign-img' alt='Capricorn'/>
        </article>
    )

}

export default Sign;