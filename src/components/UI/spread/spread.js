import React from 'react';

const spread = (props) => {
    return (
        <div>
            {props.children.map(child => (
                <div className={props.className} key={Math.random()} >
                    {child}
                </div>)
            )}
        </div>
    )

};

export default spread;