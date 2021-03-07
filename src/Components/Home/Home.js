import React from 'react';
import Sign from '../Sign/Sign';
import './Home.css';
import signImages from '../../utils/signImages';

const Home = (props) => {
    
    const signComponents = signImages.map((image, index) => {
        return (
            <Sign key={index} image={image} retrieveHoroscopeData={props.retrieveHoroscopeData}/>
        )
    })

    return (
        <main className='all-star-signs-main'>
            { signComponents }
        </main>
    )
}

export default Home; 