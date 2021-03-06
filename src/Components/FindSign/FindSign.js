import React from 'react';
import Form from '../Form/Form'
import './FindSign.css';
// import compareDates from '../../utils/compareDates';

const FindSign = (props) => {
    let displaySavedDates = props.savedDates.map(saved => {
        return <h3 key={saved.id}>{saved.name} {saved.date}</h3>
    })
    
    

    return (
        <main className='find-signs-main'>
            <h2>Find Your Sign</h2>
            <Form addBirthDate={props.addBirthDate} />
            {!props.savedDates.length && 
            <div>
                <h3>No dates saved yet! Fill out the form above to save your loved ones dates! </h3>
            </div>}
            {props.savedDates.length !== 0 && 
            <div>
                {displaySavedDates}
            </div>}
        </main>
    )
}

export default FindSign;