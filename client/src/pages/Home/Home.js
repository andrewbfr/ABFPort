import React, { Component } from "react";
import './style.css';


const Home = props =>
    <div className="grid-container">
        {/*Static Navbar*/}
        <div className="gNavBar">
            <div className="name">
                <a href="/"><h2>Andrew Ferrer</h2></a>
            </div>
            <div className="navbar-links">
                <a href="/">About</a><a href="/projects">Portfolio</a><a href="/contact">Contact</a>
            </div>
        </div>



{/*Main Content*/}
        <div className="main">
            <div className="about">
                <h1 className="bio">About Me</h1>
            <br></br>
                <div className="headshot">
                    <img alt="headshot of author" className="img-responsive"></img>
                </div>
            <br></br>      
            </div>
        </div>  
        <div className="social">
            <div>
                <h2>Connect With Me</h2>
                <a href="https://github.com/andrewbfr" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/images/if_github_386637.png" alt="github icon" id="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/andrew-ferrer-9aa011a6/" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/images/if_linkedin2_326115.png" alt="linkedin icon" id="linkedin"></img>
                </a>
                <a href="https://stackoverflow.com/users/8497994/andrewbfr" target="_blank" rel="noopener noreferrer">
                    <img src="../../assets/images/if_overflow_386674.png" alt="stack overflow icon" id="stacko"></img>
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