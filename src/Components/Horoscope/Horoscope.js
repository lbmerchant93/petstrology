import React from 'react';
import './Horoscope.css';

const Horoscope = (props) => {
    const { day, isLoading, errorMsg, horoscope, image, alt, sign } = props.horoscope;

    return (
        <main className="horoscope-main">
            {errorMsg && <p className='error-message'>{errorMsg}</p>}
            {isLoading && <p className='loading-message'>Loading...</p>}
            {horoscope  &&   
                <section className="horoscope-content">
                    <img className='horoscope-sign-img' src={image} alt={alt} />
                    <div className='details'>
                        <h2 className='horoscope-sign-title'>{sign.toUpperCase()}</h2>
                            <ul>
                                <li className='days-date'>Current Date: {horoscope.current_date}</li>
                                <li className='date-range'>Birthday Range: {horoscope.date_range}</li>
                                <li className='days-color'>Color: {horoscope.color}</li>
                                <li className='days-compatibility'>Compatibility: {horoscope.compatibility}</li>
                                <li className='days-description'>Description: {horoscope.description}</li>
                                <li className='days-lucky-numbers'>Lucky Number: {horoscope.lucky_number}</li>
                                <li className='days-lucky-time'>Lucky Time: {horoscope.lucky_time}</li>
                                <li className='days-mood'>Mood: {horoscope.mood}</li>
                            </ul>
                            {day !== 'yesterday' && <button className='yesterday' onClick={() => props.retrieveDifferentDay('yesterday')}>Yesterday</button>}
                            {day !== 'today' && <button className='today' onClick={() => props.retrieveDifferentDay('today')}>Today</button>}
                            {day !== 'tomorrow' && <button className='tomorrow' onClick={() => props.retrieveDifferentDay('tomorrow')}>Tomorrow</button>} 
                    </div>
                </section>
            }   
        </main>
    )
}


export default Horoscope; 