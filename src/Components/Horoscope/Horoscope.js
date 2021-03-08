import React from 'react';
import PropTypes from 'prop-types';
import './Horoscope.css';

const Horoscope = (props) => {
    const { day, isLoading, errorMsg, horoscope, image, sign } = props.horoscope;

    return (
        <main className="horoscope-main">
            {errorMsg && <p className='error-message'>{errorMsg}</p>}
            {isLoading && <p className='loading-message'>Loading...</p>}
            {horoscope  &&   
                <section className="horoscope-content">
                    <img className='horoscope-sign-img' src={image} alt={sign} />
                    <div className='details'>
                        <h2 className='horoscope-sign-title'>{sign.toUpperCase()}</h2>
                            <ul>
                                <li className='days-date'>
                                    <h3>Current Date:</h3>
                                    {horoscope.current_date}
                                </li>
                                <li className='date-range'>
                                    <h3>Birthday Range:</h3> 
                                    {horoscope.date_range}
                                </li>
                                <li className='days-color'>
                                    <h3>Color:</h3> 
                                    {horoscope.color}
                                </li>
                                <li className='days-compatibility'>
                                    <h3>Compatibility:</h3> 
                                    {horoscope.compatibility}
                                </li>
                                <li className='days-lucky-numbers'>
                                    <h3>Lucky Number:</h3> 
                                    {horoscope.lucky_number}
                                </li>
                                <li className='days-lucky-time'>
                                    <h3>Lucky Time:</h3> 
                                    {horoscope.lucky_time}
                                </li>
                                <li className='days-mood'>
                                    <h3>Mood:</h3> 
                                    {horoscope.mood}
                                </li>
                                <li className='days-description'>
                                     <h3>Description:</h3> 
                                     {horoscope.description}
                                </li>
                            </ul>
                            {day !== 'yesterday' && <button className='yesterday' onClick={() => props.retrieveDifferentDay('yesterday')}>YESTERDAY</button>}
                            {day !== 'today' && <button className='today' onClick={() => props.retrieveDifferentDay('today')}>TODAY</button>}
                            {day !== 'tomorrow' && <button className='tomorrow' onClick={() => props.retrieveDifferentDay('tomorrow')}>TOMORROW</button>} 
                    </div>
                </section>
            }   
        </main>
    )
}

export default Horoscope; 

Horoscope.propTypes = {
    day: PropTypes.string,
    isLoading: PropTypes.bool, 
    errorMsg: PropTypes.string, 
    horoscope: PropTypes.object, 
    image: PropTypes.string, 
    sign: PropTypes.string
}