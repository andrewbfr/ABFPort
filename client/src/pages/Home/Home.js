import React, { Component } from "react";
import './style.css';


const Home = props =>
    <div className="grid-container">
        {/*Static Navbar*/}
        <nav className="gNavBar">
            <div className="nav">
                <span>
                    <a className="name" href="/"><h1>Andrew Ferrer</h1></a>
                </span>
                <ul className="navbar-links">
                    <li><a href="/">About</a></li>
                    <li><a href="/projects">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>



{/*Main Content*/}
        <div className="main">
            <div className="">
                <div className="" id="about">
                    <div>
                        <h1 className="id" id="bio" style={{color: "#4aaaa5"}}>About Me</h1>
                    </div>
                <br></br>
                    <div>
                        <img className="" src="../../assets/images/headshot.jpg" alt="headshot of author" className="img-responsive"></img>
                    </div>
                <br></br>             
                    <div className="social">
                        <h2>Connect With Me</h2>
                        <div id="connect-bottom"></div>
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
            </div>
        </div>  


    {/*footer*/}

        <div className="foot">
            <div className="">
                <footer className="">
                &copy; Copyright 2018 Andrew Ferrer
                </footer>
            </div>
        </div>
    </div>

export default Home;