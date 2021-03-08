import React from 'react';
import './Contact.css';
import lucasProfile from '../../images/lucasProfilePic.jpg'

const Contact = () => {
    return (
        <main className='contact-main'>
            <h2 className='contact-title'>CONTACT THE DEVELOPER</h2>
            <a href="https://github.com/lbmerchant93"><img className='github-profile-pic' src={lucasProfile} alt='Lucas Github'/></a>
            <a className='github-profile-link' href="https://github.com/lbmerchant93">Github:lbmerchant93</a>
            <a className='linkedin-profile-link' href="https://www.linkedin.com/in/lucas-merchant93/">LinkedIn:lbmerchant93</a>
        </main>
    )
}

export default Contact;