import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import signImages from '../../utils/signImages';
import './SavedSignInstance.css';

const SavedSignInstance = ({ saved, formatDate, id, retrieveHoroscopeData, removeBirthDate }) => {
    // const { saved, formatDate, id } = props;
    const foundImage = signImages.find(sign => {
        return sign.alt === saved.sign.toLowerCase()
    })

    return (
        <section className='saved-instance' key={saved.id} id={saved.id}>
            <li className='name'>
                <h3 className='who'>Who:</h3>
                {saved.name}
            </li>
            <li className='sign'>
                <h3 className='who-sign'>Sign:</h3>
                <Link to={{
                    pathname: `/Horoscope/${foundImage.alt}`
                    }}
                    className='link-to-sign'
                    onClick={() => retrieveHoroscopeData(`https://aztro.sameerkumar.website/?sign=${foundImage.alt}&day=today`, foundImage.src, foundImage.alt)}>
                    {saved.sign}
                </Link> 
            </li>
            <li className='birth-date'>
                <h3 className='who-birth-date'>Birth Date:</h3>
                {formatDate}
            </li>
            <button className='remove-saved-sign' onClick={() => removeBirthDate(id)}>REMOVE</button>
        </section>
    )
}

export default SavedSignInstance;

SavedSignInstance.propTypes = {
    saved: PropTypes.object, 
    formatDate: PropTypes.string, 
    id: PropTypes.number, 
    retrieveHoroscopeData: PropTypes.func, 
    removeBirthDate: PropTypes.func
}