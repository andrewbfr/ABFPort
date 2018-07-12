import React from "react";

const Contact = () =>
<div>
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