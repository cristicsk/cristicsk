import React from 'react';
import {withRouter }from 'react-router-dom'
import './logo.css'
import { NavLink } from 'react-router-dom';
import logoImg from '../../../../assets/images/logo/logo.png'

const Logo = (props) => {
    const active = ('/' === props.history.location.pathname)

    let logo = (
        <NavLink onClick={props.click} to="/">
            <div className='logo-container'>
                <img className='logo' src={logoImg} alt="logo" />
            </div>
        </NavLink>)

    if (props.disabled || active) 
        logo =
            (
                <div className='disabled-nav-link'>
                    <div className='logo-container'>
                        <img className='logo' src={logoImg} alt="logo" />
                    </div>
                </div>
            )


    return logo

}

export default withRouter(Logo);  