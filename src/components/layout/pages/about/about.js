import React, { Component } from 'react';
import TransitionOverlay from '../../../UI/transitionOverlay/transitionOverlay'
import Spread from '../../../UI/spread/spread'
import Tag from '../../../UI/tag/tag'
import Tags from '../../../UI/tags/tags'
import aboutMeImg from '../../../../assets/images/aboutme/cv.jpg'
import './about.css'


class About extends Component {

     render() {
          return (
               <Spread>
                    <TransitionOverlay />
                    <div text='about' className='about page'>
                         <div className="about-container">
                              <div className="about-left">
                                   <Tags position='start'>
                                        <Tag style={{position: 'absolute'}} size='medium' content='<body>' />
                                        <li className='about-me-img-container'>
                                             <img className='about-me-img' src={aboutMeImg} alt="Hello it's me!" />
                                        </li>
                                        <div className='about-main'>
                                             <span className='push-text'> </span>Hello ! My name is Cristian, I am from Cluj-Napoca, the heart of Transylvania.
                                             I'm an ambitious, perfectionist type of person who loves
                                             building websites that offer a great user experience. I am able to adapt to any
                                             requirements and therefore can fit to any project. I'm a fast learner
                                             that tackles problems with a
                                             <span className='text-highlight'> "think-outside-the-box" </span> mindset.
                                             Since childhood I enjoyed playing computer games, wondering what magic makes them work.
                                             My curiosity led me to study computer programming in high-school, so I could pursue
                                             my ambition of working as a programmer. After learning the basics, I decided
                                             to focus on
                                             <span className='bold-highlight'> Web Development</span> where I can practice and
                                             apply my ideas through skill and creativty.

                                        </div>
                                        <Tag size='medium' content='</body>' />
                                   </Tags>
                                   <Tag size='end' content="</article>" />

                              </div>
                              <div className="about-right">
                                   <div className='secondary'></div>
                              </div>
                         </div>
                    </div>
               </Spread>
          )

     }
};


export default About;