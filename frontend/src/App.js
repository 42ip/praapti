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

function App() {
  const [user,setUser] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/Reg">
              <Auth/>
            </Route>
            <Route exact path="/app">
              <Landing/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
