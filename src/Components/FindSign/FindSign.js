import React from 'react';
import PropTypes from 'prop-types';
import SavedSignInstance from '../SavedSignInstance/SavedSignInstance';
import Form from '../Form/Form';
import './FindSign.css';
import moment from 'moment';

const FindSign = ({ savedDates, removeBirthDate, retrieveHoroscopeData, addBirthDate }) => {
    let displaySavedDates = savedDates.map(saved => {
        let formatDate = moment(saved.date).format("MMMM Do")
        return (
            <SavedSignInstance 
                key={saved.id} 
                saved={saved} 
                formatDate={formatDate} 
                retrieveHoroscopeData={retrieveHoroscopeData}
                removeBirthDate={removeBirthDate}
                id={saved.id}
            />
        )
    })
    
    return (
        <main className='find-signs-main'>
            <h2 className='find-title'>FIND YOUR SIGN</h2>
            <Form addBirthDate={addBirthDate} />
            <h3 className='saved-search-title'>YOUR SEARCHED SIGNS</h3>
            {!savedDates.length && 
            <div className='none-saved'>
                <h3>No dates saved yet! Fill out the form above to save your loved one's dates! </h3>
            </div>}
            {savedDates.length !== 0 && 
            <article className='saved-signs'>
                {displaySavedDates}
            </article>}
        </main>
    )
}

export default FindSign;

FindSign.propTypes = {
    savedDates: PropTypes.array, 
    removeBirthDate: PropTypes.func,
    retrieveHoroscopeData: PropTypes.func,
    addBirthDate: PropTypes.func
}