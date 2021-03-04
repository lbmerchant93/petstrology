import React from 'react';
import './Horoscope.css';
import aquarius from'../../images/aquarius.png';

const Horoscope = () => {
    return (
       <main className="horoscope-main">
            <div className='title-img'>
                <h2 className='horoscope-sign-title'>Sign Title</h2>
                <img className='horoscope-sign-img' src={aquarius} alt='aquarius' />
            </div>
            <div className='details'>
                <ul>
                    <li className='days-date'>Current Date:</li>
                    <li className='days-color'>Color:</li>
                    <li className='days-compatibility'>Compatibility:</li>
                    <li className='days-description'>Description:</li>
                    <li className='days-lucky-numbers'>Lucky Number:</li>
                    <li className='days-lucky-time'>Lucky Time:</li>
                    <li className='days-mood'>Mood:</li>
                </ul>
            </div>
       </main>
    )
}

export default Horoscope; 