import React from 'react';
import { Link } from "react-router-dom";
import './SavedSignInstance.css';

const SavedSignInstance = (props) => {
    const { saved, formatDate } = props
    return (
        <section className='saved-instance' key={saved.id}>
            <li className='name'>
                <h3>Who:</h3>
                {saved.name}
            </li>
            <li className='birth-date'>
                <h3>Birth Date:</h3>
                {formatDate}
            </li>
            <li className='sign'>
                <h3>Sign:</h3>
                <Link to={{
                    pathname: `/Horoscope/${saved.sign.toLowerCase()}`
                    }}
                    // onClick={() => props.retrieveHoroscopeData(`https://aztro.sameerkumar.website/?sign=${saved.sign.toLowerCase()}&day=today`, src, alt)}>
                    >
                    {saved.sign}
                </Link> 
            </li>
        </section>
    )
}

export default SavedSignInstance;