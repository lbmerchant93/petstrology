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
    const images = [capricorn, aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius];
    
    const signComponents = images.map((image, index) => {
        return (
            <Sign key={index} image={image}/>
        )
    })

    return (
        <main className='all-star-signs-main'>
            { signComponents }
        </main>
        // <main className='all-star-signs-main'>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>CAPRICORN</h2>
        //         <img src={capricorn} className='sign-img' alt='Capricorn'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>AQUARIUS</h2>
        //         <img src={aquarius} className='sign-img' alt='Aquarius'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>PISCES</h2>
        //         <img src={pisces} className='sign-img' alt='Pisces'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>ARIES</h2>
        //         <img src={aries} className='sign-img' alt='Aries'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>TAURUS</h2>
        //         <img src={taurus} className='sign-img' alt='Taurus'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>GEMINI</h2>
        //         <img src={gemini} className='sign-img' alt='Gemini'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>CANCER</h2>
        //         <img src={cancer} className='sign-img' alt='Cancer'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>LEO</h2>
        //         <img src={leo} className='sign-img' alt='Leo'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>VIRGO</h2>
        //         <img src={virgo} className='sign-img' alt='Virgo'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>LIBRA</h2>
        //         <img src={libra} className='sign-img' alt='Libra'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>SCORPIO</h2>
        //         <img src={scorpio} className='sign-img' alt='Scorpio'/>
        //     </article>
        //     <article className='all-star-signs'>
        //         <h2 className='sign-title'>SAGITTARIUS</h2>
        //         <img src={sagittarius} className='sign-img' alt='Sagittarius'/>
        //     </article>
        // </main>
    )
}

export default Home; 