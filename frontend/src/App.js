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
import Map from './Components/Map/Map'
import Profile from './Components/Profile/Profile'
import IMS from './Components/UserProfs/IMS';
import Job from './Components/Job/Job'
import {Component} from 'react';
import SubmitForm from './Components/SubmitForm';

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
            <Route exact path="/IMS">
                <IMS/>
            </Route>
            <Route exact path="/SF">
                <SubmitForm />
            </Route>      
          <Route exact path="/IMS" component={IMS}/>



          
          <Route exact path="/" component={Home}/>
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/map" component={Map}/>
          <Route exact path="/job" component={Job}/>
          <Route exact path="/profile" component={Profile}></Route> 
        </Switch>
         <Footer/>
      </div>
    </Router>
  );
  }
}

export default App;
