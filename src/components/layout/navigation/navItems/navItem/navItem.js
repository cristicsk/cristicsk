import React, { Component } from 'react';
import './navItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, withRouter } from 'react-router-dom';

class NavItem extends Component {

    render() {
        const active = (this.props.link === this.props.history.location.pathname)
        const activeClass = active ? 'active' : '';

        let navLink = 
        (
            <li onClick={this.props.onClick}  className={"nav-item " + activeClass}>
                
                <NavLink exact className="nav-link" to={this.props.link}>
                
                    <div className="nav-item-box">
                        <FontAwesomeIcon size='lg' icon={this.props.icon} />
                        <p className='nav-item-text'>{this.props.children}</p>
                    </div>

                </NavLink>
            </li>
        )
        
        if(this.props.disabled || active) 
        navLink =
        (
            <li className={"nav-item " + activeClass}>
                
                <div disabled={true} className={"nav-link " + activeClass}  to={this.props.link}>
                
                    <div className="nav-item-box">
                        <FontAwesomeIcon size='lg' icon={this.props.icon} />
                        <p className='nav-item-text'>{this.props.children}</p>
                    </div>

                </div>
            </li>
        )



        return navLink

    }
};


export default withRouter(NavItem);