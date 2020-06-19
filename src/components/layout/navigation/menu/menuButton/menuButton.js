import React from 'react';
import './menuButton.css'

const menu = (props) => {
    const classes = ['menu-button','closed'];
    if(!props.show){classes.pop('closed')}

    return (
        <ul onClick={props.onClick} className={classes.join(' ')}>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
};

export default menu;