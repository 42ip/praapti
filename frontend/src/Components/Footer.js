import "./css/Footer.css";
import { BrowserRouter as Link } from "react-router-dom";
import { Component } from "react";

export default class Footer extends Component{
    render()
    {
        return (
        <div className="footer">
            Copyright &#169; 2021 Yield. 
            &nbsp;
            <p>
                <Link to='/privacy' >
                    Privacy Policy
                </Link>
            </p>
            </div>
        );
    }
}

