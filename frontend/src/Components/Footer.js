import "./css/Footer.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Component } from "react";
import Privacy from './Privacy'

export default class Footer extends Component{
    render()
    {
        return (
        <Router>
        <div className="footer">
            Copyright &#169; 2021 Yield. 
            <p>
                <Link to='/privacy'>
                    Privacy Policy
                </Link>
            </p>
            </div>
            <Switch>
                <Route exact path='/privacy' component={Privacy} />
            </Switch>
        </Router>
        );
    }
}

