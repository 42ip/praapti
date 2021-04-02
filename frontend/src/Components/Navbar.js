import { Component } from 'react';
import './css/Navbar.css';
import logo from '../images/logo.png';

export default class Navbar extends Component {
    render() {
        return (
            <div class="navbar">
                <img src={logo} alt="logo" />
                <h6>Login</h6>
                <h6>Sign Up</h6>
            </div>
        );
    }
}
