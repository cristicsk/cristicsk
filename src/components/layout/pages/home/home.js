import React, { Component } from 'react';
import './home.css';
import Tag from '../../../UI/tag/tag';
import Tags from '../../../UI/tags/tags';
import MainText from '../../../UI/mainText/mainText';
import Svg from './SVG/svg';
import ContactButton from './contactButton/contactButton';
import TransitionOverlay from '../../../UI/transitionOverlay/transitionOverlay';
import Spread from '../../../UI/spread/spread';

class Home extends Component {

    render() {

        return (
            <Spread>
                <TransitionOverlay />
                <div className="main page">
                    <Tags>
                        <Tag size="small" content={'<body>'}></Tag>
                        <Tags position="middle">
                            <Tag size="medium" content={'<h1>'}></Tag>

                            <li className='main-text-container'>
                                <MainText>Hello,</MainText>
                                <MainText>I'm Cristian, a freelance</MainText>
                                <Svg firstRender={this.props.firstRender} />
                            </li>

                            
                            <Tag size="medium" content={'</h1>'}></Tag>
                        </Tags>
                        <Tags>
                        <Tag size="small" content={'<body/>'}></Tag>
                            <li><ContactButton firstRender={this.props.firstRender} /></li>
                        <Tag size="end" content={'<html/>'}></Tag>
                        </Tags>
                    </Tags>
                </div>
            </Spread>
        )

    }
};


export default Home;