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