import React, { Component } from 'react';
import Form from '../Form/Form'
import './FindSign.css';

class FindSign extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let displaySavedDates = this.props.savedDates.map(saved => {
           return <h3 key={saved.id}>{saved.name} {saved.date}</h3>
        })

        return (
            <main>
                <h2>Not sure of you or your pets sign? Fill out the form below to find out!</h2>
                <Form addBirthDate={this.props.addBirthDate} />
                {!this.props.savedDates.length && 
                <div>
                    <h3>No dates saved yet! Fill out the form above to save your loved ones dates! </h3>
                </div>}
                {this.props.savedDates.length !== 0 && 
                <div>
                    {displaySavedDates}
                </div>}
            </main>
        )
    } 
}

export default FindSign;