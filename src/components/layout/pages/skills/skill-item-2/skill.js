import React from 'react';
import './skill.css'

const skillItem = (props) => {
    if (props.color2) {
        return (
            <li>
                <div
                    className="skill-item"
                    style={{
                        border: `2px solid ${props.color}`
                    }}>
                    <img className='skill-img' src={props.img} alt="skillImg" />
                    <div
                        className="skill-bg"
                        style={{
                            background: `linear-gradient(145deg, ${props.color} 0, ${props.color} 49%, ${props.color2} 50%)`
                        }} />
                    <span className="skill-text">
                        {props.children}
                    </span>
                </div>
            </li>
        )
    }
    else return (
        <li>
            <div
                className="skill-item"
                style={{
                    border: `2px solid ${props.color}`
                }}>
                <img className='skill-img' src={props.img} alt="skillImg" />
                <div
                    className="skill-bg"
                    style={{
                        backgroundColor: props.color
                    }} />
                <span className="skill-text">
                    {props.children}
                </span>
            </div>
        </li>

    )
}

export default skillItem;