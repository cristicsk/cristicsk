import React from 'react';
import './mainText.css';

const MainText = (props) => {

    return <p className='main-text'>{props.children}</p>
    
};

export default MainText;