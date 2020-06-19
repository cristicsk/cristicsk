import React, { Component } from 'react';
import './navigation.css'
import NavItems from './navItems/navItems';
import Logo from './logo/logo';
import Menu from './menu/menu';
import MenuButton from './menu/menuButton/menuButton';
import SocialNetworks from './socialNetworks/socialNetworks'

class Navigation extends Component {
     state = {
          loading: false,
          menuOpen: false,
     }

     handleNavClicked = () => {
          this.setState({loading: true, menuOpen: false});
          setTimeout(
               () => {this.setState({loading: false})}
          ,3100)
     }

     toggleMenu = () => {
          this.setState(prevState => ({
               menuOpen: !prevState.menuOpen
          }))
     }
 
     render() {
          
          return (
          <div className="navigation">
              <Logo loading={this.state.loading} click={this.handleNavClicked} />
              <NavItems loading={this.state.loading} click={this.handleNavClicked}/>
              <SocialNetworks />
              <MenuButton show={this.state.menuOpen} onClick={this.toggleMenu}/>
              <Menu loading={this.props.loading} toggleMenu={this.toggleMenu} click={this.handleNavClicked} show={this.state.menuOpen}/>
          </div>
          )

     }
};


export default Navigation;