import React from 'react';
import rotateImg from '../../assets/images/rotate/rotate.jpg'
import './rotatePhone.css';

const RotatePhone = (props) => {

    return (
    <div className='rotate-phone'>
        <img className='rotate-phone-img' src={rotateImg} alt="rotate phone"/>
    </div> )

};

export default RotatePhone;
