import React from "react";

const Projects = () =>
    <div>
        {/*tiled background image
            <style type="text/css"> 
                body {
                margin: 0;
                padding: 0;
                background-image: url(./assets/images/concrete-texture.png);
                }
            </style>*/}
        {/*Static Navbar*/}
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="container-fluid">
                        <span>
                        <a class="navbar-brand" href="index.html"><h1>Andrew Ferrer</h1></a>
                        </span>
                        <ul class="nav navbar-nav navbar-right">
                            <li><a href="index.html">About</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>	
                        <div class="col-md-2"></div>
                    </div>	
                </div>
            </div>
        </nav>



        {/*Main Content*/}
        <div class="container">
            <div class="row">
                <div class="col-md-8" id="about">
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
                <div class="col-md-4" id="social">
                    <h2>Connect With Me</h2>
                    <div id="connect-bottom"></div>
                        <a href="https://github.com/andrewbfr" target="_blank">
                        <img src="assets/images/if_github_386637.png" alt="github icon" id="github"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/andrew-ferrer/" target="_blank">
                        <img src="assets/images/if_linkedin2_326115.png" alt="linkedin icon" id="linkedin"></img>
                        </a>
                        <a href="https://stackoverflow.com/users/8497994/andrewbfr" target="_blank">
                        <img src="assets/images/if_overflow_386674.png" alt="stack overflow icon" id="stacko"></img>
                        </a>
                </div>
            </div>	
        </div>


        {/*footer*/}
            <div class="container-fluid navbar-fixed-bottom">
                <div class="row">
                    <footer class="col-12 text-center" id="foot">
                        &copy; Copyright 2018 Andrew Ferrer
                    </footer>
                </div>
            </div>
    </div>
export default Projects;