import React from 'react';
import { Link } from "react-router-dom";
import signImages from '../../utils/signImages';
import './SavedSignInstance.css';

const SavedSignInstance = (props) => {
    const { saved, formatDate, id } = props;
    const foundImage = signImages.find(sign => {
        return sign.alt === saved.sign.toLowerCase()
    })

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
                    pathname: `/Horoscope/${foundImage.alt}`
                    }}
                    onClick={() => props.retrieveHoroscopeData(`https://aztro.sameerkumar.website/?sign=${foundImage.alt}&day=today`, foundImage.src, foundImage.alt)}>
                    {saved.sign}
                </Link> 
            </li>
            <button className='remove-saved-sign' onClick={() => props.removeBirthDate(id)}>REMOVE</button>
        </section>
    )
}

export default SavedSignInstance;