import React, { Component } from "react";
import './style.css';
import github from "../../assets/images/if_github_386637.png";
import linkedin from "../../assets/images/if_linkedin2_326115.png";
import SO from "../../assets/images/stackoverflow.png";
import tow from "../../assets/images/towBG.JPG";
import abf from "../../assets/images/abfBG.JPG";
import nico from "../../assets/images/nicoBG.JPG";
import rome from "../../assets/images/agrippaBG.JPG";

// import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

/*
    <ResponsiveImage>
  <ResponsiveImageSize
    default
    minWidth={0}
    path={'path-to-small-image.jpg'}
  />
  <ResponsiveImageSize
    minWidth={768}
    path={'path-to-medium-image.jpg'}
  />
  <ResponsiveImageSize
    minWidth={1100}
    path={'path-to-large-image.jpg'}
  />
</ResponsiveImage> 
outline:
    nav
    image
    main/about
    image
    tech
    image
    proj
    image
    footer with social
*/

const Home = props =>
    <div className="grid-container">
        {/* Static Navbar. This will be a component */}
        <div className="gNavBar">
            <div className="name">
                <a href="/"><h2>Andrew Ferrer</h2></a>
            </div>
            <div className="navbar-links">
                <a href="/">About</a><a href="/projects">Portfolio</a><a href="/contact">Contact</a>
            </div>
        </div>



    {/* Main Content w/ parallax */}
        <div className="main">
            <div className="about">
                <h1 className="bio">About Me</h1>
            <br></br>
                <div className="headshot">
                </div>
            <br></br>      
            </div>
        </div>

    {/* Tech Stack */}

    {/* Projects */}

    {/* Social Connect */}

        <div className="social">
            <div>
                <h2>Connect With Me</h2>
                <a href="https://github.com/andrewbfr" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github icon" id="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/andrew-ferrer-9aa011a6/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin icon" id="linkedin"></img>
                </a>
                <a href="https://stackoverflow.com/users/8497994/andrewbfr" target="_blank" rel="noopener noreferrer">
                    <img src={SO} alt="stack overflow icon" id="stacko"></img>
                </a>
            </div>
        </div>  


    {/*footer*/}

        <div className="footer">
            <div>
                <footer>
                &copy; Copyright 2018 Andrew Ferrer
                </footer>
            </div>
        </div>
    </div>

export default Home;