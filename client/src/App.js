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

export default App;
