import React from 'react';
import SavedSignInstance from '../SavedSignInstance/SavedSignInstance';
import Form from '../Form/Form';
import './FindSign.css';
import moment from 'moment';
import { uid } from 'uid';

const FindSign = (props) => {
    let displaySavedDates = props.savedDates.map(saved => {
        let formatDate = moment(saved.date).format("MMMM Do")
        return (
            <SavedSignInstance 
                key={uid()} 
                saved={saved} 
                formatDate={formatDate} 
                retrieveHoroscopeData={props.retrieveHoroscopeData}
                removeBirthDate={props.removeBirthDate}
                id={saved.id}
            />
        )
    })
    
    return (
        <main className='find-signs-main'>
            <h2 className='find-title'>Find Your Sign</h2>
            <Form addBirthDate={props.addBirthDate} />
            <h3 className='saved-search-title'>Your searched signs</h3>
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