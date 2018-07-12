import React from "react";
import './style.css';


const Contact = () =>
<div>
    {/*Static Navbar*/}
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container-fluid">
            <div class="row">
                <div class="container-fluid">
                    <span>
                    <a class="navbar-brand" href="/"><h1>Andrew Ferrer</h1></a>
                    </span>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/">About</a></li>
                        <li><a href="/projects">Portfolio</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>	
                    <div class="col-md-2"></div>
                </div>	
            </div>
        </div>
    </nav>



    {/*Main Content*/}
    <div class="container">
        <div class="col-md-4" id="social">
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



    {/*footer*/}

    <div class="container-fluid navbar-fixed-bottom">
        <div class="row">
            <footer class="col-12 text-center" id="foot">
                &copy; Copyright 2018 Andrew Ferrer
            </footer>
        </div>

    </div>
</div>

export default Contact;