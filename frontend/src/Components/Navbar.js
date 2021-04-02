import { Component } from 'react';
import './css/Navbar.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div class="navbar">
                <img src={logo} alt="logo" />
                <Link to="/reg">
                <button type="button" className="button-one">
                     Register
                </button>
                </Link>
                {/* <button className="button-two">
                 Sign Up
                </button> */}
            </div>
        );
    }
}
