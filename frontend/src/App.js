import './App.css';
import Auth from './Components/Auth/Auth';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer'
import Home  from './Components/Home';
import Privacy from './Components/Privacy';
import {Component} from 'react';


class App extends Component{
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <Switch>
        <Route exact path="/Reg">
              <Auth/>
            </Route>
          <Route exact path="/" component={Home}/>
          <Route exact path="/privacy" component={Privacy} /> 
        </Switch>
         <Footer/>
      </div>
    </Router>
  );
  }
}

export default App;
