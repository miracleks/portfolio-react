import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

const Header = () => {

    const scrollTo = () => {
        scroll.scrollToTop();
    }

    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        document.getElementById('not').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
          x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        // <div>
        //     <div className="Header">
        //         <h1>{ `I'm ${header.name}` }</h1>
        //     <p className="line-1 anim-typewriter">and this is my portfolio... </p>
        //     <label className="switch">
        //         <input id="mode-switch" onClick={toggleDarkMode} type="checkbox"/>
        //         <span className="slider round"></span>
        //     </label>
        //     <HeaderButton/>
        //     </div>
        //     <img id="not-dark" onClick={scrollTo} alt="Go to top" title="Go to top" className="gtp" src="profile.png"></img>
        // </div>
        <nav className="site-nav js-site-navbar mb-5 site-navbar-target">
            <div className="container">
                <div className="site-navigation text-center">
                    <a href="index.html" className="d-block text-center float-left logo">KHW</a>
                    <ul className="js-clone-nav ml-0 pl-0 d-none d-lg-inline-block site-menu mx-auto text-center">
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} className="nav-link active">Home</Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} className="nav-link">About</Link></li>
                        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Portfolio</Link></li>
                        <li><Link activeClass="active" to="services" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Services</Link></li>
                        <li><Link activeClass="active" to="resume" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Resume</Link></li>
                        <li><Link activeClass="active" to="blog" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Blog</Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className="nav-link">Contact</Link></li>
                    </ul>
                    <a href="#" className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block light d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>
                </div>
            </div>
            <img id="not-dark" onClick={scrollTo} alt="Go to top" title="Go to top" className="gtp" src="profile.png"></img>
        </nav>
    )
    
}

export default Header;