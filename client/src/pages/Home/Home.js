import React, { Component } from "react";
import './style.css';
import github from "../../assets/images/githubLogo.png";
import linkedin from "../../assets/images/linkedin.png";
import SO from "../../assets/images/stackOverflow.png";
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

    ok so make the rows with the grid instead of setting the vh unit, this will correspond with the desired and computed height of the images and the content rows
*/

const Home = props =>
    <div className="grid-container">
        {/* Static Navbar. This will be a component */}
        <div className="gNavBar">
            <span className="name">
                <a href="/"><h2>Andrew Ferrer</h2></a>
            </span>
            <span className="navbar-links">
                <a href="/">About</a><a href="/projects">Portfolio</a><a href="/contact">Contact</a>
            </span>
        </div>

    {/* Nico BG */}
        <div className="abfBG"></div>



    {/* Main Content */}
        <div className="main">
            <div className="about">
                <h1 className="bio headings">About Me</h1>
            <br></br>
                <div className="headshot">
                </div>
            <br></br>      
            </div>
        </div>

    {/*Agrippa BG */}
        <div className="agrippaBG"></div>

    {/* Tech Stack */}
    <div className="tech">
            <div>
                <h1 className="stack headings">Tech Stack</h1>
            <br></br>
                <div>
                </div>
            <br></br>      
            </div>
        </div>

    {/*Tow BG */}
        <div className="towBG"></div>

    {/* Projects */}
    <div className="builds">
            <div>
                <h1 className="headings projects">Projects</h1>
            <br></br>
                <div>
                </div>
            <br></br>      
            </div>
        </div>

    {/*ABF BG */}
    <div className="nicoPara"></div>

    {/* Social Connect */}

        <div className="social">
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