import React, { Component } from 'react';
import './socialElement.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialElement = (props) => {

    return (
        <li className="social-element">
            <a href={props.link} target="_blank">
                <div className="social-element-box">
                    <FontAwesomeIcon size='lg' icon={props.icon} />
                </div>
            </a>
        </li>
    )
};


export default SocialElement;