import React from 'react';
import './Horoscope.css';

const Horoscope = (props) => {
    const { src, alt, signTitle } = props.location.state;
    
    return (
       <main className="horoscope-main">
            <img className='horoscope-sign-img' src={src} alt={alt} />
            <div className='details'>
                <h2 className='horoscope-sign-title'>{signTitle}</h2>
                <ul>
                    <li className='days-date'>Current Date:</li>
                    <li className='days-color'>Color:</li>
                    <li className='days-compatibility'>Compatibility:</li>
                    <li className='days-description'>Description:</li>
                    <li className='days-lucky-numbers'>Lucky Number:</li>
                    <li className='days-lucky-time'>Lucky Time:</li>
                    <li className='days-mood'>Mood:</li>
                </ul>
                <button className='yesterday'>Yesterday</button>
                <button className='today'>Today</button>
                <button className='tomorrow'>Tomorrow</button>
            </div>
       </main>
    )
}

export default Horoscope; 