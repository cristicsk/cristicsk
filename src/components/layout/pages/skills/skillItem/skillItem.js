import React from 'react';
import './skillItem.css'

const skillItem = (props) => {
    return (
        <li>
            <span
                style={{
                    background: props.color,
                    boxShadow: `0 0 4px ${props.color}`

                }}
                className="skill-item">
                {props.children}
            </span>
        </li>

    )
}

export default skillItem;