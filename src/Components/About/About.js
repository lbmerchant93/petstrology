import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './About.css';

const About = ({ goingToPage }) => {
    return (
        <main className='about-main'>
            <h2 className='about-title'>ABOUT PAGE</h2>
            <div className='about-info'>
                <article className='why-article'>
                    <h3 className='why'>WHY</h3>
                    <h4 className='why-made'>Ever wondered why your pets don't seem to get along some days? Why they are super cuddly one day then have an endless amount of energy the next? Petstrology can help give you some insight on why that might be! For centuries humans have been looking to the skys for answers to the universe. Astrology is the study of the movements and relative positions of celestial bodies interpreted as having an influence on human affairs and the natural world. But astrology doesn't just effect humans, it effects all living things. Go figure right? I mean some of the signs are literally depicted with animals. <br/> 🦀  🐮  🐐  🦁  🦂  🐟</h4>
                </article>
                <article className='getting-started-article'>
                    <h3 className='start'>GETTING STARTED</h3>
                    <h4 className='getting-started'>If you know the sign of the person or creature you're wondering about, then you can just select their sign from the 
                    <Link className='all-link' to='/' onClick={() => goingToPage('atHome')}> ALL SIGNS </Link> 
                    page. If you are unsure of their sign, visit the 
                    <Link className='find-link' to='/FindYourSigns' onClick={() => goingToPage('atFindSign')}> FIND YOUR SIGNS </Link> 
                    page. Once there you can input the name of who's sign you are looking up and their date of birth. The date does not need to be the correct year they were born, just make sure the month and day are the correct birthday dates. Once you submit their information a card will pop up below with their name, birth date, and sign. You can then navigate straight to that sign's horoscope. If you decide you don't want to have that one stored anymore, just select remove on the card.</h4>
                </article>
                <article className='horoscope-article'>
                    <h3 className='reading-horoscope'>READING HOROSCOPES</h3>
                    <h4 className='how-to-read-horoscope'>Once selecting your sign of choice, the information given is for today's horoscope. This will include the lucky color, number, and time of day. The compatibility shows what signs you will get along with best today and the description helps you understand your feelings which is directly related to the mood predicted. You can select 'Yesterday' or "Tomorrow" at the bottom of the horoscope to receive the corresponding day's horoscope. The birthday range tells you the range that this sign falls under.<br/>  ♑️ ♒️ ♓️ ♈️ ♉️ ♊️ <br/>HAPPY HOROSCOPING<br/> ♋️ ♌️ ♍️ ♎️ ♏️ ♐️</h4>
                </article>
            </div>
        </main>
    )
}

export default About;

About.propTypes = {
    goingToPage: PropTypes.func
}