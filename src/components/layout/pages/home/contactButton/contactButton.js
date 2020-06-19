import React from 'react';
import './contactButton.css'
import { Link } from 'react-router-dom'

const contactButton = (props) => {

    const contactClasses = ['contact-box'];
    if (props.firstRender === true) { contactClasses.push('first-render') }

    return <div className='contact-box-align'>
        <div className={contactClasses.join(' ')}>
            <Link to="/contact" className="contact-button">
                CONTACT ME
            </Link>
        </div>
    </div>
};
{/* <button className="contact-button">CONTACT ME</button> */ }

export default contactButton;