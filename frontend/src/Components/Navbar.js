import { useState,useEffect } from 'react';
import './css/Navbar.css';
import logo from '../images/logo.png';
import { Link,useHistory } from 'react-router-dom';



export default function Navbar (){
        const [state,setState] = useState(localStorage.getItem("role")==="Employee" || localStorage.getItem("role")==="Owner");
        const history = useHistory();
        const handleLogout = () =>{
            localStorage.clear();
            history.push("/")
            setState(false);
        }
        const handleRegister = () =>{
            if (localStorage.getItem("role")==="Employee" || localStorage.getItem("role")==="Owner"){
                window.location.reload();
            }
            else history.push("/reg")
        }

        return (
            <div className="navbar">
                
                <img src={logo} alt="logo" />
                {!state?
                <button type="button" className="button-one" onClick={handleRegister}>
                     Register
                </button>
                :<button type="button" className="button-one" onClick={handleLogout}>
                     Logout
                </button>}
                {/* <button className="button-two">
                 Sign Up
                </button> */}
            </div>
        );
    
}
