import React from 'react';
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
    return (
        <main className='all-star-signs-main'>
            <article className='all-star-signs'>Capricorn
            <img src={capricorn} className='sign-img' alt='Capricorn'/>
            </article>
            <article className='all-star-signs'>Aquarius
            <img src={aquarius} className='sign-img' alt='Aquarius'/>
            </article>
            <article className='all-star-signs'>Pisces
            <img src={pisces} className='sign-img' alt='Pisces'/>
            </article>
            <article className='all-star-signs'>Aries
            <img src={aries} className='sign-img' alt='Aries'/>
            </article>
            <article className='all-star-signs'>Taurus
            <img src={taurus} className='sign-img' alt='Taurus'/>
            </article>
            <article className='all-star-signs'>Gemini
            <img src={gemini} className='sign-img' alt='Gemini'/>
            </article>
            <article className='all-star-signs'>Cancer
            <img src={cancer} className='sign-img' alt='Cancer'/>
            </article>
            <article className='all-star-signs'>Leo
            <img src={leo} className='sign-img' alt='Leo'/>
            </article>
            <article className='all-star-signs'>Virgo
            <img src={virgo} className='sign-img' alt='Virgo'/>
            </article>
            <article className='all-star-signs'>Libra
            <img src={libra} className='sign-img' alt='Libra'/>
            </article>
            <article className='all-star-signs'>Scorpio
            <img src={scorpio} className='sign-img' alt='Scorpio'/>
            </article>
            <article className='all-star-signs'>Sagittarius
            <img src={sagittarius} className='sign-img' alt='Sagittarius'/>
            </article>
        </main>
    )
}

export default Home; 