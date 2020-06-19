import React, { Component } from 'react';
import TransitionOverlay from '../../../UI/transitionOverlay/transitionOverlay'
import Spread from '../../../UI/spread/spread'
import WorkCard from './workCard/workCard'
import './work.css'


class About extends Component {

     render() {
          return (
               <Spread>
                    <TransitionOverlay />
                    <div className='work page'>
                         <div className='box-content'>
                              <h1 className='content-title'>EDUCATION</h1>
                              <ul className='work-list'>
                                   <WorkCard header="2011 - 2015">
                                        High School | National College 'Andrei Muresanu' Dej
                                   </WorkCard>
                                   <WorkCard header="2019 - Present">
                                        Udemy | HTML, CSS, JavaScript, ReactJS
                                   </WorkCard>
                              </ul>


                         </div>
                         <div className='box-content'>
                              <h1 className='content-title'>WORK</h1>
                              <ul className='work-list'>
                                   <WorkCard header='2016 - 2018'> 
                                        PC Service &#38; Maintainenace | 
                                   </WorkCard>
                                   <WorkCard header='2018 - 2019'> 
                                        SmartSpot SRL - IT Support Engineer
                                   </WorkCard>
                                   <WorkCard header='2020 - Present'> 
                                        Freelancer - Web Developer
                                   </WorkCard>
                              </ul>

                              <div className='creations'>
                              </div>
                         </div>


                    </div>
               </Spread>
          )

     }
};


export default About;