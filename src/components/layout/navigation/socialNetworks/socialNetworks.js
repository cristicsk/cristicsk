import React, { Component } from 'react';
import './socialNetworks.css'
import SocialElement from './socialElement/socialElement'
import * as icons from '@fortawesome/free-brands-svg-icons'



class SocialNetworks extends Component {

     render() {
          return (
            <ul className="social-networks">
                <SocialElement icon={icons.faFacebookSquare} link="http://facebook.com">Facebook</SocialElement >
                <SocialElement icon={icons.faInstagram} link="http://instagram.com">Instagram</SocialElement>
                <SocialElement icon={icons.faLinkedin} link="http://linkedin.com">Linkedin</SocialElement>
            </ul>
          )

     }
};


export default SocialNetworks;