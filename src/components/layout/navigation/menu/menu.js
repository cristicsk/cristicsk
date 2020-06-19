import React, { Component } from 'react';
import NavItem from '../navItems/navItem/navItem';
import * as icons from '@fortawesome/free-solid-svg-icons'
import './menu.css';

class Menu extends Component {

    render() {
        const classes = ['menu', 'closed'];
        if (this.props.show) {
            classes.pop('closed');
        }
        return (
            <div className={classes.join(' ')}>
                <div onClick={this.props.toggleMenu} className='close-button'>x</div>
                <div className='menu-item'>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faHome} link={'/'}>Home</NavItem>
                </div>
                <div className='menu-item'>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faUser} link={'/about'}>About me</NavItem>
                </div>
                <div className='menu-item'>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faBriefcase} link={'/work'}>Work</NavItem>
                </div>
                <div className='menu-item'>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faCode} link={'/skills'}>Skills</NavItem>
                </div>
                <div className='menu-item'>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faAddressCard} link={'/contact'}>Contact</NavItem>
                </div>
            </div>
        )
    }

};

export default Menu;