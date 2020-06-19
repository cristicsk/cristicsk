import React from 'react';
import './workCard.css';

const workCard = (props) => {

    return (
        <li className="work-card">
            <div className='work-card-content'>
                <h4 className='work-card-title'>{props.header}</h4>
                <p className='work-card-body'>{props.children}</p>
            </div>
        </li>
    )

};

export default workCard;