import React from 'react';
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
                {saved.sign}
            </li>
        </section>
    )
}

export default SavedSignInstance;