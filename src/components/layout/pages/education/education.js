import React from 'react';
import TransitionOverlay from '../../../UI/transitionOverlay/transitionOverlay'
import Spread from '../../../UI/spread/spread'
import './education.css'

const Education = (props) => {
    return(
        <Spread>
            <TransitionOverlay></TransitionOverlay>
            <div className='education page'>
                Education
            </div>  
        </Spread>
    )

};

export default Education;