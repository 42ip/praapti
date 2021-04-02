import './App.css';
import Auth from './components/Auth/Auth';
import Landing from './components/landing/Landing';
import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Navbar from './components/Navbar.js';
import Footer from './components/Footer'
import Home  from './components/Home';
import Privacy from './components/Privacy';
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
            <Route exact path="/app">
              <Landing/>
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
