import React from 'react';
import PropTypes from 'prop-types';
import Sign from '../Sign/Sign';
import './Home.css';
import signImages from '../../utils/signImages';

const Home = ({ retrieveHoroscopeData }) => {
    
    const signComponents = signImages.map((image, index) => {
        return (
            <Sign 
                key={index} 
                image={image} 
                retrieveHoroscopeData={retrieveHoroscopeData}
            />
        )
    })

    return (
        <main className='all-star-signs-main'>
            { signComponents }
        </main>
    )
}

export default Home; 

Home.propTypes = {
    retrieveHoroscopeData: PropTypes.func
}