import "./css/Footer.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { Component } from "react";

export default class Footer extends Component{
    render()
    {
        return (
        <div className="footer">
            <p>
            Copyright &#169; 2021 Yield. 
            &nbsp;
                <Link to='/privacy' >
                    Privacy Policy
                </Link>
            </p>
            </div>
        );
    }
}

