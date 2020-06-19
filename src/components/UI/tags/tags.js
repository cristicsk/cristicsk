import React from 'react';
import './tags.css'

const Tags = (props) => {
    switch (props.position) {
        case 'middle':
            return(
                <ul {...props} className="tags-mid">
                    {props.children}
                </ul>
            )
        default:
            return (
                <ul {...props} className='tags'>
                    {props.children}
                </ul>
            )
    }
};

export default Tags;