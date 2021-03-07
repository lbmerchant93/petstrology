import React from 'react';
import Form from '../Form/Form'
import './FindSign.css';
import moment from 'moment';

const FindSign = (props) => {
    let displaySavedDates = props.savedDates.map(saved => {
        let formatDate = moment(saved.date).format("MMMM Do")
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
    })
    
    return (
        <main className='find-signs-main'>
            <h2 className='find-title'>Find Your Sign</h2>
            <Form addBirthDate={props.addBirthDate} />
            {!props.savedDates.length && 
            <div className='none-saved'>
                <h3>No dates saved yet! Fill out the form above to save your loved ones dates! </h3>
            </div>}
            {props.savedDates.length !== 0 && 
            <article className='saved-signs'>
                {displaySavedDates}
            </article>}
        </main>
    )
}

export default FindSign;