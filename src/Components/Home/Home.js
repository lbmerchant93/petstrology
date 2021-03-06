import React from 'react';
import Sign from '../Sign/Sign';
import './Home.css';
import capricorn from '../../images/capricorn.png';
import aquarius from'../../images/aquarius.png';
import pisces from'../../images/pisces.png';
import aries from'../../images/aries.png';
import taurus from'../../images/taurus.png';
import gemini from'../../images/gemini.png';
import cancer from'../../images/cancer.png';
import leo from'../../images/leo.png';
import virgo from'../../images/virgo.png';
import libra from'../../images/libra.png';
import scorpio from'../../images/scorpio.png';
import sagittarius from'../../images/sagittarius.png';

const Home = (props) => {
    const images = [
        {src: capricorn, alt:'capricorn'},
        {src: aquarius, alt: 'aquarius'},
        {src: pisces, alt: 'pisces'},
        {src: aries, alt: 'aries'},
        {src: taurus, alt: 'taurus'},
        {src: gemini, alt: 'gemini'}, 
        {src: cancer, alt: 'cancer'}, 
        {src: leo, alt: 'leo'},
        {src: virgo, alt: 'virgo'},
        {src: libra, alt: 'libra'},
        {src: scorpio, alt: 'scorpio'}, 
        {src: sagittarius, alt: 'sagittarius'}
    ];
    
    const signComponents = images.map((image, index) => {
        return (
            <Sign key={index} image={image} retrieveHoroscopeData={props.retrieveHoroscopeData}/>
        )
    })

    return (
        <main className='all-star-signs-main'>
            { signComponents }
        </main>
    )
}

export default Home; 