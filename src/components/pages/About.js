import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title } from '../../profile'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

console.log()

const About = () => {
    return (
        <Element name="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">{section2title}</h1>
                </div>
                <p className="lead about-text">
                    {about.paragraph}  
                </p>
            </div>
            </div>
            <div className="row" id="Skills"> 
                <div className="col-12 skills">
                    {skillsBar.map((x) => 
                        <Skills label={x.name} per={x.value}/>
                    )}
                </div> 
            </div>
        </Element>
    )
}

export default About
