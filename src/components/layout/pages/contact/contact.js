import React from 'react';
import TransitionOverlay from '../../../UI/transitionOverlay/transitionOverlay'
import Spread from '../../../UI/spread/spread';
import Tags from '../../../UI/tags/tags';
import Tag from '../../../UI/tag/tag';
// import Three from '../../../../containers/three/three';
import './contact.css'

const Contact = (props) => {
    return (
        <Spread>
            <TransitionOverlay />
            <div className='contact page'>
                <div className="contact-left">
                    <Tags>
                        <Tag size='medium' content='<body>' />
                        <div className="contact-box">
                            <div className="contact-title">
                                <h1 className='skills-title'>Contact Me</h1>
                            </div>
                            <div className="contact-form">
                                <form id='contact' autoComplete='off' action="mailto:cristi_csk@yahoo.com" method="post" encType="text/plain">
                                    <ul>
                                        <li className="half animated">
                                            <input className='input-field' type="text" name="name" placeholder='Name' />
                                        </li>

                                        <li className="half animated">
                                            <input className='input-field' type="email" name="email" placeholder='Email' />
                                        </li>

                                        <li className="animated">
                                            <input className='input-field' type="text" name="subject" placeholder='Subject' />
                                        </li>

                                        <li>
                                            <textarea className='input-field' name="message" id="message" cols="30" rows="10">Message</textarea>
                                        </li>
                                        <li className="submit">
                                            <input type="submit" className='submit-btn' value="SEND" />
                                        </li>

                                    </ul>
                                </form>
                            </div>
                        </div>


                        <Tag size='medium' content='</body>' />
                    </Tags>
                </div>

                <div className="contact-right">
                    <div className='secondary'></div>
                </div>


            </div>
        </Spread>
    )

};

export default Contact;