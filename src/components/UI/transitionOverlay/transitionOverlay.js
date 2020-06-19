import React from 'react';
import './transitionOverlay.css';

const transitionOverlay = (props) => {

    return (
            <div className='transition-overlay'>
                <div className='transition-content'>
                    <div className='transition-paragraph'>Loading ...</div>
                    <div className='transition-progressbar'></div>
                </div>
            </div>
    )
};

export default transitionOverlay;