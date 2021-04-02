import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer'
import Home  from './Components/Home';
import Privacy from './Components/Privacy';
import {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class App extends Component{
  render(){
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <Switch>
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
