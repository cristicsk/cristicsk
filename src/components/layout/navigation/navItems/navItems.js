import React, { Component } from 'react';
import './navItems.css';
import NavItem from './navItem/navItem';
import * as icons from '@fortawesome/free-solid-svg-icons';

class NavItems extends Component {

     render() {
          return (
               <ul className="nav-items">
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faHome} link={'/'}>Home</NavItem>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faUser} link={'/about'}>About me</NavItem>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faBriefcase} link={'/work'}>Work</NavItem>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faCode} link={'/skills'}>Skills</NavItem>
                    <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faAddressCard} link={'/contact'}>Contact</NavItem>
               </ul>
          )

     }
};


export default NavItems;
/* <NavItem disabled={this.props.loading} onClick={this.props.click} icon={icons.faGraduationCap} link={'/education'}>Education</NavItem> */

// class NavItems extends Component {
//      state = {
//           loading: false
//      }

//      handleNavClicked = () => {
//           this.setState({loading: true});
//           setTimeout(
//                () => {this.setState({loading: false})}
//           ,3100)
//      }

//      render() {
//           return (
//                <ul className="nav-items">
//                     <NavItem disabled={this.state.loading} onClick={this.handleNavClicked} icon={icons.faHome} link={'/'}>Home</NavItem>
//                     <NavItem disabled={this.state.loading} onClick={this.handleNavClicked} icon={icons.faUser} link={'/about'}>About me</NavItem>
//                     <NavItem disabled={this.state.loading} onClick={this.handleNavClicked} icon={icons.faBriefcase} link={'/work'}>Work</NavItem>
//                     <NavItem disabled={this.state.loading} onClick={this.handleNavClicked} icon={icons.faGraduationCap} link={'/education'}>Education</NavItem>
//                     <NavItem disabled={this.state.loading} onClick={this.handleNavClicked} icon={icons.faCode} link={'/skills'}>Skills</NavItem>
//                     <NavItem disabled={this.state.loading} onClick={this.handleNavClicked} icon={icons.faAddressCard} link={'/contact'}>Contact</NavItem>
//                </ul>
//           )

//      }
// };


// export default NavItems;