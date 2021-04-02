import { Component } from 'react';
import './css/Navbar.css';
import logo from '../images/logo.png';

export default class Navbar extends Component {
    render() {
        return (
            <div class="navbar">
                <img src={logo} alt="logo" />
                <button className="button-one">
                 Login
                </button>
                <button className="button-two">
                 Sign Up
                </button>
            </div>
        );
    }
}
