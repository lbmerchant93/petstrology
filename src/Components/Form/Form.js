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
                <label>
                    Name:
                    <input
                    className='name-input'
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}/>
                </label>
            </form>
        )
    }
}

export default Form;