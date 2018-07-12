import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () =>
    <Router>
        <div>
          <Switch>
            <Route exact= {true} path="/" component={Home} />
            <Route exact= {true} path="/contact" component={Contact} />
            <Route exact= {true} path="/projects" component={Projects} />
          </Switch>
        </div>
    </Router>
// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <style type="text/css"> 
//           body {
//           margin: 0;
//           padding: 0;
//           background-image: url(./assets/images/concrete-texture.png);
//           }
//         </style> */}
//         {/*Static Navbar*/}
        
//         <nav class="navbar navbar-default navbar-static-top">
//           <div class="container-fluid">
//             <div class="row">
//               <div class="container-fluid">
//                 <span>
//                 <a class="navbar-brand" href="index.html"><h1>Andrew Ferrer</h1></a>
//                 </span>
//                 <ul class="nav navbar-nav navbar-right">
//                       <li><a href="index.html">About</a></li>
//                       <li><a href="portfolio.html">Portfolio</a></li>
//                       <li><a href="https://www.linkedin.com/in/andrew-ferrer/">Contact</a></li>
//                 </ul>
//               </div>	
//             </div>
//           </div>
//         </nav>
  
  
  
//         {/*Main Content*/}
//         <div class="container">
//           <div class="row">
//             <div class="col-md-8" id="about">
//                 <div>
//                   <h1 class="col-md-7 id" id="bio" style={{color: "#4aaaa5"}}>About Me</h1>
//                 </div>
//                     <br></br>
//                 <div>
//                     <img class="col-md-7" src="assets/images/headshot.jpg" alt="headshot of author" class="img-responsive"></img>
//                 </div>
//                     <br></br>             
//               <div class="col-md-4" id="social">
//                 <h2>Connect With Me</h2>
//                   <div id="connect-bottom"></div>
//                     <a href="https://github.com/andrewbfr" target="_blank" rel="noopener noreferrer">
//                       <img src="assets/images/if_github_386637.png" alt="github icon" id="github"></img>
//                     </a>
//                     <a href="https://www.linkedin.com/in/andrew-ferrer-9aa011a6/" target="_blank" rel="noopener noreferrer">
//                       <img src="assets/images/if_linkedin2_326115.png" alt="linkedin icon" id="linkedin"></img>
//                     </a>
//                     <a href="https://stackoverflow.com/users/8497994/andrewbfr" target="_blank" rel="noopener noreferrer">
//                       <img src="assets/images/if_overflow_386674.png" alt="stack overflow icon" id="stacko"></img>
//                     </a>
//               </div>
//             </div>
//           </div>
//         </div>  
  
  
//         {/*footer*/}
  
//           <div class="container-fluid navbar-fixed-bottom">
//             <div class="row">
//               <footer class="col-12 text-center" id="foot">
//                 &copy; Copyright 2018 Andrew Ferrer
//               </footer>
//             </div>
//           </div>
//       </div>
      
//     );
//   }
// }

export default App;
