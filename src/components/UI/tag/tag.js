import React from 'react';
import './tag.css'

const Tag = (props) => {
    switch(props.size) {
        case 'small':
            return <li style={props.style}><p className="tag tag-small">
                    {props.children}
                    {props.content}
            </p></li>
        case 'medium':
            return <li style={props.style}><p  
                className="tag tag-medium">
                    {props.children}
                    {props.content}
            </p> </li>
        case 'large':
            return <li style={props.style}><p
                className="tag tag-large">
                    {props.children}
                    {props.content}
            </p></li> 
        case 'end':
            return <li className='tag-end' style={props.style}><p
                className="tag tag-medium">
                    {props.children}
                    {props.content}
            </p></li>    
        default:
            return 'ERROR'
    }
    
};


export default Tag;