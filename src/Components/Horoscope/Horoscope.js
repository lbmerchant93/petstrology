import React, { Component } from 'react';
import './Horoscope.css';
import { fetchHoroscope } from '../../apiCalls';

class Horoscope extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            errorMsg: '',
            horoscope: ''
        }
    }

    componentDidMount() {
        fetchHoroscope('https://aztro.sameerkumar.website/?sign=aries&day=today')
        .then(result => {
            if (typeof result === 'string') {
                this.setState({
                  isLoading: false,
                  errorMsg: result
                })
              } else {
                this.setState({
                    horoscope: result,
                    isLoading: false
                  })
              }
        })
    }

    render() {
        const { src, alt, signTitle } = this.props.location.state;
        const { isLoading, errorMsg, horoscope } = this.state;
        console.log(horoscope)
        return (
            <main className="horoscope-main">
                <img className='horoscope-sign-img' src={src} alt={alt} />
                <div className='details'>
                    <h2 className='horoscope-sign-title'>{signTitle}</h2>
                    {errorMsg && <p className='error-message'>{errorMsg}</p>}
                    {isLoading && <p className='loading-message'>Loading...</p>}
                    {horoscope  && 
                    <section>
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
                        <button className='yesterday'>Yesterday</button>
                        <button className='today'>Today</button>
                        <button className='tomorrow'>Tomorrow</button>
                    </section>
                    }     
                </div>
            </main>
        )
    }
}

export default Horoscope; 