import React from 'react';
import SavedSignInstance from '../SavedSignInstance/SavedSignInstance';
import Form from '../Form/Form';
import './FindSign.css';
import moment from 'moment';

const FindSign = (props) => {
    let displaySavedDates = props.savedDates.map(saved => {
        let formatDate = moment(saved.date).format("MMMM Do")
        return (
            <SavedSignInstance 
                key={Date.now()} 
                saved={saved} 
                formatDate={formatDate} 
                retrieveHoroscopeData={props.retrieveHoroscopeData}
            />
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