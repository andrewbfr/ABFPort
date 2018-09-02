import React, { Component } from "react";
import './style.css';
import github from "../../assets/images/githubLogo.png";
import linkedin from "../../assets/images/linkedin.png";
import SO from "../../assets/images/stakkOverflow.png";
import H from "../../assets/page_logos/HTML5_logo.svg";
import C from "../../assets/page_logos/CSS3_logo.svg";
import JS from "../../assets/page_logos/js.png";
import FM from "../../assets/appGIF/feedMe.gif";
import CGIF from "../../assets/appGIF/CRYSTALZ.gif";
import NCGIF from "../../assets/appGIF/newsCrumbs.gif";


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

const Home = () =>
    <div className="flex-container">
        {/* Static Navbar. This will be a component */}
        <div className="gNavBar">
            <span className="name">
                <a href="/"><h2>Andrew Ferrer</h2></a>
            </span>
            <span className="navbar-links">
                <a href="#about">About</a> | <a href="#projects">Portfolio</a> | <a href="#contact">Contact</a>
            </span>
        </div>

    {/* ABF BG */}
        <div className="abfBG"></div>



    {/* Main Content */}
        <div className="main keySection" id="about">
            <div>
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
    <div className="techHeadings keySection">
            <div>
                <h1 className="stack headings">Tech Stack</h1>
            <br></br>
                <div className="logoContainer">
                    <a href="https://github.com/andrewbfr" target="_blank" rel="noopener noreferrer">
                        <img className="sizedIcons techIcons" src={H} alt="html icon" id="hIcon"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/andrew-ferrer-9aa011a6/" target="_blank" rel="noopener noreferrer">
                        <img className="sizedIcons techIcons" src={C} alt="css icon" id="cIcon"></img>
                    </a>
                    <a href="https://stackoverflow.com/users/8497994/andrewbfr" target="_blank" rel="noopener noreferrer">
                        <img className="sizedIcons techIcons" src={JS} alt="JS icon" id="jIcon"></img>
                    </a>
                </div>
            <br></br>      
            </div>
        </div>

    {/*Tow BG */}
        <div className="towBG"></div>

    {/* Projects */}
    <div className="builds keySection" id="projects">
        <div>
            <h1 className="headings">Projects</h1>
        <br></br>
            <div>
                <ul className="projList">
                    <a href="https://feed-me-project-dos.herokuapp.com/login">A Node, Express and Sequelize Web App for picking local restaurants.
                    <img className="sizedIcons techIcons" src={FM} alt="feedMe GIF" id="FGIF"></img>
                    </a>
                   
                    <a href="https://andrewbfr.github.io/crystalz/">A Javascript game!
                    <img className="sizedIcons techIcons" src={CGIF} alt="game GIF" id="CGIF"></img>
                    </a>
                   
                    <a href="https://news-crumbs.herokuapp.com/">MERN stack web app integrating News Search API from Webhose.io.
                    <img className="sizedIcons techIcons" src={NCGIF} alt="newsCrumbs GIF" id="NCGIF"></img>
                    </a>
                </ul>
            </div>
        <br></br>      
        </div>
    </div>

    {/*Nico BG */}
    <div className="nicoPara"></div>

    {/* Social Connect */}

        <div className="social keySection">
            <h2>Connect With Me</h2>
            <a href="https://github.com/andrewbfr" target="_blank" rel="noopener noreferrer">
                <img className="sizedIcons" src={github} alt="github icon" id="github"></img>
            </a>
            <a href="https://www.linkedin.com/in/andrew-ferrer-9aa011a6/" target="_blank" rel="noopener noreferrer">
                <img className="sizedIcons" src={linkedin} alt="linkedin icon" id="linkedin"></img>
            </a>
            <a href="https://stackoverflow.com/users/8497994/andrewbfr" target="_blank" rel="noopener noreferrer">
                <img className="sizedIcons" src={SO} alt="stack overflow icon" id="stacko"></img>
            </a>
        </div>  


    {/*footer*/}

        <div className="footer" id="contact">
            <div>
                <footer>
                &copy; Copyright 2018 Andrew Ferrer
                </footer>
            </div>
        </div>
    </div>

export default Home;