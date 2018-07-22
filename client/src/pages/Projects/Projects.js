import React from "react";
import './style.css';


const Projects = () =>
    <div>
        {/*Static Navbar*/}
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="container-fluid">
                        <span>
                        <a className="navbar-brand" href="/"><h1>Andrew Ferrer</h1></a>
                        </span>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">About</a></li>
                            <li><a href="/projects">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>	
                        <div className="col-md-2"></div>
                    </div>	
                </div>
            </div>
        </nav>



        {/*Main Content*/}
        <div className="container">
            <div className="row">
                <div className="col-md-8" id="about">
                    <div>
                        <ol>
                            <ul><a href="https://feed-me-project-dos.herokuapp.com/login">A Node, Express and Sequelize Web App for picking local restaurants.</a>
                            </ul>
                            {/* <ul><a href="https://shielded-harbor-40941.herokuapp.com/">A MERN-stack New York Times article scraper that needs some tweaking.</a>
                            </ul>*/}
                            <ul><a href="https://andrewbfr.github.io/crystalz/">A Javascript game!</a>
                            </ul>
                            <ul><a href="https://news-crumbs.herokuapp.com/">MERN stack web app integrating News Search API from Webhose.io.</a>
                            </ul>
                        </ol>
                    </div>
                </div>
                {/*Social sidebar*/}
                <div className="col-md-4" id="social">
                    <h2>Connect With Me</h2>
                    <div id="connect-bottom"></div>
                        <a href="https://github.com/andrewbfr" target="_blank">
                        <img src="../../assets/images/if_github_386637.png" alt="github icon" id="github"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-ferrer/" target="_blank">
                        <img src="../../assets/images/if_linkedin2_326115.png" alt="linkedin icon" id="linkedin"></img>
                        </a>
                        <a href="https://stackoverflow.com/users/8497994/andrewbfr" target="_blank">
                        <img src="../../assets/images/if_overflow_386674.png" alt="stack overflow icon" id="stacko"></img>
                        </a>
                </div>
            </div>	
        </div>


        {/*footer*/}
            <div className="container-fluid navbar-fixed-bottom">
                <div className="row">
                    <footer className="col-12 text-center" id="foot">
                        &copy; Copyright 2018 Andrew Ferrer
                    </footer>
                </div>
            </div>
    </div>
export default Projects;