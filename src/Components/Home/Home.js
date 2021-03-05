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

const Home = () => {
    const images = [
        {src: capricorn, alt:'Capricorn'},
        {src: aquarius, alt: 'Aquarius'},
        {src: pisces, alt: 'Pisces'},
        {src: aries, alt: 'Aries'},
        {src: taurus, alt: 'Taurus'},
        {src: gemini, alt: 'Gemini'}, 
        {src: cancer, alt: 'Cancer'}, 
        {src: leo, alt: 'Leo'},
        {src: virgo, alt: 'Virgo'},
        {src: libra, alt: 'Libra'},
        {src: scorpio, alt: 'Scorpio'}, 
        {src: sagittarius, alt: 'Sagittarius'}
    ];
    
    const signComponents = images.map((image, index) => {
        return (
            <Sign key={index} image={image}/>
        )
    })

    return (
        <main className='all-star-signs-main'>
            { signComponents }
        </main>
    )
}

export default Home; 