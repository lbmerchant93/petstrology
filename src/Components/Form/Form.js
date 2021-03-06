import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form>
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
                <button className='submit' >VIEW YOUR SIGN</button>
            </form>
        )
    }
}

export default Form;