import React from 'react';
import TransitionOverlay from '../../../UI/transitionOverlay/transitionOverlay';
import Spread from '../../../UI/spread/spread';
import Tags from '../../../UI/tags/tags';
import Tag from '../../../UI/tag/tag';
import './skills.css'
// import Skill from './skillItem/skillItem';
import Skill from './skill-item-2/skill';
import * as SkillImg from '../../../../assets/images/skills/index';

const Skills = (props) => {
    return (
        <Spread>
            <TransitionOverlay></TransitionOverlay>
            <div className='skills page'>
                <Tags>
                    <Tag size='small' content='<body>' />
                    <Tags style={{ marginLeft: '40px', marginBottom: 'auto' }} position='middle'>
                        <Tag size='small' content='<h1>' />
                        <h1 className='skills-title'>Skills &#38; Experience</h1>
                        <div className='skills-description'>
                            <span className='push-text'></span>I'm mostly proficient in front-end development, but I'm accustomed to working on back-end as well.
                            These are some of the assets I've worked with so far:
                        </div>
                        <ul className='skills-list'>
                            <Skill color='#e33f15' img={SkillImg.HTML}>HTML</Skill>
                            <Skill color='#016cb4' img={SkillImg.CSS}>CSS</Skill>
                            <Skill color='#edd718' img={SkillImg.JS}>JavaScript</Skill>
                            <Skill color='#49cdf6' img={SkillImg.REACTJS}>ReactJS</Skill>
                            <Skill color='#5467b6' img={SkillImg.PHP}>PHP</Skill>
                            <Skill color='#764abc' img={SkillImg.REDUX}>Redux</Skill>
                            <Skill color='#3c76a7' color2='#edd718' img={SkillImg.PYTHON}>Python</Skill>
                            <Skill color='#00c2f7' img={SkillImg.APS}>Adobe Photoshop</Skill>
                            <Skill color='#f77b19' img={SkillImg.AI}>Adobe Illustrator</Skill>
                        </ul>
                    </Tags>


                    <Tag style={{ marginBottom: 'auto' }} size='small' content='<body>' />
                    <Tag size='small' content='</html>' />
                </Tags>
            </div>
        </Spread>
    )

};

export default Skills;