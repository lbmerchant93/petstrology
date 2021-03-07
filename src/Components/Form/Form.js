import React, { Component } from 'react';
import './Form.css';
import compareDates from '../../utils/compareDates';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitBirthDate = event => {
        let foundSign = compareDates(this.state.date);
        event.preventDefault();
        const newBirthDate = {
            ...this.state,
            id: Date.now(),
            sign: foundSign
        }
        this.props.addBirthDate(newBirthDate);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({ name: '', date: ''})
    }

    render() {
        return (
            <form className='form'>
                <label className='name-label'>
                    NAME:
                    <input
                    className='name-input'
                    type='text'
                    name='name'
                    placeholder='NAME'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}/>
                </label>
                <label className='date-label'>
                    BIRTH DATE:
                    <input
                    className='date-input'
                    type='date'
                    name='date'
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}/>
                </label>
                <button disabled={!this.state.name || !this.state.date} className={!this.state.name || !this.state.date ? 'disabled' : 'submit'} onClick={event => this.submitBirthDate(event)}>VIEW YOUR SIGN</button>
            </form>
        )
    }
}

export default Form;