import React,{useState,useEffect} from 'react';
import classes from './Auth.module.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import farmer from '../../images/farmer.png';


const Reg = ({setRole,setAddress,setPhone,setAadhar,register,login,state,redirect,setState,registerUsername,setRegisterUsername,registerPassword,setRegisterPassword,confirmPassword,setConfirmPassword,loginPassword,setLoginPassword,loginUsername,setLoginUsername})=>{
    const [redirectRoute,setRedirect] = useState("/app");
    if (redirect) {
        return <Redirect to={redirectRoute} />
    }
    else{
        const getUser = () => {
            axios({
              method: "GET",
              withCredentials: true,
              url: "http://localhost:8080/test",
            }).then((res) => {
              console.log("USER is " +res.data.username);
            });
          };
        return (
            <div className={classes.topReg}>
        
            {!state?
                <div className={classes.register}
                >
                    <div className={classes.inp}>
                        <label for="username">Username</label>
                        <input
                            name="username"
                            className={classes.input}
                            placeholder="username"
                            onChange={e=> setRegisterUsername(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className={classes.inp}>
                    <label for="password">Password</label>
                        <input
                            name="password"
                            className={classes.input}
                            placeholder="password"
                            type="password"
                            onChange={e=> setRegisterPassword(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className={classes.inp}>
                    <label for="confirm">Role</label>
                        <input
                            name="role"
                            className={classes.input}
                            placeholder="Role"
                            type="text"
                            onChange={e=> setRole(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className={classes.inp}>
                    <label for="address">Address Line 1</label>
                        <input
                            name="address"
                            className={classes.input}
                            placeholder="address line"
                            type="text"
                            onChange={e=> setAddress(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className={classes.inp}>
                    <label for="phone">Phone Number</label>
                        <input
                            name="phone"
                            className={classes.input}
                            placeholder="address line 2"
                            type="text"
                            onChange={e=> setPhone(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className={classes.inp}>
                    <label for="aadhar">Aadhar</label>
                        <input
                            name="aadhar"
                            className={classes.input}
                            placeholder="Aadhar Number"
                            type="text"
                            onChange={e=> setAadhar(e.target.value)}
                        >
                        </input>
                    </div>

                    <button
                    className={classes.button}
                    onClick={register}
                    >Register
                    </button>
                    <p>Already Have an account?<button className={classes.but1} onClick={()=>{setState(true)}}>Click Here</button></p>
                </div> :

                <div className={classes.login}
                >
                     <div className={classes.inp}>
                        <label for="username">Username</label>
                        <input
                            className={classes.input}
                            placeholder="username"
                            onChange={e=> setLoginUsername(e.target.value)}
                        >
                        </input>
                    </div>

                    <div className={classes.inp}>
                    <label for="password">Password</label>
                        <input
                            className={classes.input}
                            placeholder="password"
                            type="password"
                            onChange={e=> setLoginPassword(e.target.value)}
                        >
                        </input>
                    </div>


                    <button
                    className={classes.button}
                    onClick={login}
                    >Login
                    </button>
                    <p>Don't have an account?<button className={classes.but1} onClick={()=>{setState(false)}}>Click Here</button></p>
                    
                    </div>
                }
            </div>
        )
    }
}

export default function Auth({setUser}) {
    //State
    const [registerUsername,setRegisterUsername] = useState(""),
          [loginUsername,setLoginUsername] = useState(""),
          [registerPassword,setRegisterPassword] = useState(""),
          [confirmPassword,setConfirmPassword] = useState(""),
          [loginPassword,setLoginPassword] = useState(""),
          [state,setState] = useState(false),
          [redirect,setRedirect] = useState(false),
          [role,setRole] = useState(""),
          [address,setAddress] = useState(""),
          [phone,setPhone] = useState(""),
          [aadhar,setAadhar] = useState("")
          
    const register = ()=>{
        axios({
            method : 'post',
            data :{
                username : registerUsername,
                password : registerPassword,
                confirm : confirmPassword,
                role : role,
                address : address,
                phone : phone,
                aadhar : aadhar
            },
            withCredentials : true,
            url : 'http://localhost:8080/register'
        })
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const login = () => {
        axios({
            method : 'post',
            data : {
                username : loginUsername,
                password : loginPassword
            },
            withCredentials: true,
            url : 'http://localhost:8080/login'
        })
        .then(res=>{
            console.log(res);
            if (res.status === 200) {
                localStorage.setItem("user",res.data.username);
                localStorage.setITem("_id",res.data._id);
                setRedirect(true);
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className={classes.regcontainer}>
            <Reg
                registerUsername={registerUsername}
                setRegisterUsername={setRegisterUsername}
                registerPassword={registerPassword}
                setRegisterPassword={setRegisterPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                loginUsername = {loginUsername}
                setLoginUsername = {setLoginUsername}
                setLoginPassword = {setLoginPassword}
                loginPassword = {loginPassword}
                register = {register}
                login={login}
                redirect={redirect}
                state={state}
                setState={setState}
                setRole={setRole}
                setAddress={setAddress}
                setPhone = {setPhone}
                setAadhar={setAadhar}
            />
        </div>
    )
}
