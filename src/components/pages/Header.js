import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
import { header } from '../../profile'

const Header = () => {

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
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
        <nav class="site-nav js-site-navbar mb-5 site-navbar-target">
            <div class="container">
                <div class="site-navigation text-center">
                    <a href="index.html" class="d-block text-center float-left logo">KHW</a>
                    <ul class="js-clone-nav ml-0 pl-0 d-none d-lg-inline-block site-menu mx-auto text-center">
                        <li class="active"><a href="#home-section" class="nav-link active">Home</a></li>
                        <li><a href="#about-section" class="nav-link">About</a></li>
                        <li><a href="#portfolio-section" class="nav-link">Portfolio</a></li>
                        <li><a href="#services-section" class="nav-link">Services</a></li>
                        <li><a href="#resume-section" class="nav-link">Resume</a></li>
                        <li><a href="#blog-section" class="nav-link">Blog</a></li>
                        <li><a href="#contact-section" class="nav-link">Contact</a></li>
                    </ul>
                    <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block light d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                        <span></span>
                    </a>
                </div>
            </div>
            <img id="not-dark" onClick={scrollTo} alt="Go to top" title="Go to top" className="gtp" src="profile.png"></img>
        </nav>
    )
    
}

export default Header;