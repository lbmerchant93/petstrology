import React, { Component } from 'react';
import './Horoscope.css';
import { fetchHoroscope } from '../../apiCalls';

class Horoscope extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sign: this.props.location.state.alt,
            day: 'today',
            isLoading: true,
            errorMsg: '',
            horoscope: ''
        }
    }

    componentDidMount() {
        this.retrieveHoroscopeData(`https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=today`)
    }

    retrieveHoroscopeData = async (url) => {
        await fetchHoroscope(url)
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

    retrieveDifferentDay = (when) => {
        let url;
        if (when === 'yesterday') {
            url= `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=yesterday`
        } else if (when === 'tomorrow') {
            url = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=tomorrow`
        } else if (when === 'today') {
            url = `https://aztro.sameerkumar.website/?sign=${this.state.sign}&day=today`
        }
        this.retrieveHoroscopeData(url)
        this.setState({ day: when })
    }

    render() {
        const { src, alt, signTitle } = this.props.location.state;
        const { day, isLoading, errorMsg, horoscope } = this.state;

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
                        {day !== 'yesterday' && <button className='yesterday' onClick={() => this.retrieveDifferentDay('yesterday')}>Yesterday</button>}
                        {day !== 'today' && <button className='today' onClick={() => this.retrieveDifferentDay('today')}>Today</button>}
                        {day !== 'tomorrow' && <button className='tomorrow' onClick={() => this.retrieveDifferentDay('tomorrow')}>Tomorrow</button>}
                    </section>
                    }     
                </div>
            </main>
        )
    }
}

export default Horoscope; 