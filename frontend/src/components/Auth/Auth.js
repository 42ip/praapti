import React,{useState,useEffect} from 'react';
import classes from './Auth.module.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';


const Reg = ({register,login,state,redirect,setState,registerUsername,setRegisterUsername,registerPassword,setRegisterPassword,confirmPassword,setConfirmPassword,loginPassword,setLoginPassword,loginUsername,setLoginUsername})=>{
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
            <div>
        
            {!state?
                <div className={classes.register}
                >
                    <input
                        className={classes.input}
                        placeholder="username"
                        onChange={e=> setRegisterUsername(e.target.value)}
                    >
                    </input>

                    <input
                        className={classes.input}
                        placeholder="password"
                        type="password"
                        onChange={e=> setRegisterPassword(e.target.value)}
                    >
                    </input>

                    <input
                        className={classes.input}
                        placeholder="confirm password"
                        type="password"
                        onChange={e=> setConfirmPassword(e.target.value)}
                    >
                    </input>

                    <button
                    className={classes.button}
                    onClick={register}
                    >submit
                    </button>
                    <h3>Already Have an account?<button onClick={()=>{setState(true)}}>Click Here</button></h3>
                </div> :

                <div className={classes.login}
                >
                    <input
                        className={classes.input}
                        placeholder="username"
                        onChange={e=> setLoginUsername(e.target.value)}
                    >
                    </input>

                    <input
                        className={classes.input}
                        placeholder="password"
                        type="password"
                        onChange={e=> setLoginPassword(e.target.value)}
                    >
                    </input>

                    <button
                    onClick={login}
                    >submit
                    </button><h3>Don't have an account?<button onClick={()=>{setState(false)}}>Click Here</button></h3>
                    
                </div>}
                <button onClick={getUser}>Click</button>
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
          [redirect,setRedirect] = useState(false);

    const register = ()=>{
        axios({
            method : 'post',
            data :{
                username : registerUsername,
                password : registerPassword,
                confirm : confirmPassword
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
            />
        </div>
    )
}
