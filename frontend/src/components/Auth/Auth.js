import React,{useState,useEffect} from 'react';
import classes from './Auth.module.css';

const Reg = ({register,login,state,setState,registerUsername,setRegisterUsername,registerPassword,setRegisterPassword,confirmPassword,setConfirmPassword,loginPassword,setLoginPassword,loginUsername,setLoginUsername})=>{
    return (
    <div>
    {!state?
        <div className={classes.register}
        >
            <input
                placeholder="username"
                onChange={e=> setRegisterUsername(e.target.value)}
            >
            </input>

            <input
                placeholder="password"
                onChange={e=> setRegisterPassword(e.target.value)}
            >
            </input>

            <input
                placeholder="confirm password"
                onChange={e=> setConfirmPassword(e.target.value)}
            >
            </input>

            <button
            onClick={register}
            >submit
            </button>
            <h3>Already Have an account?<button onClick={()=>{setState(true)}}>Click Here</button></h3>
        </div> :

        <div className={classes.login}
        >
            <input
                placeholder="username"
                onChange={e=> setLoginUsername(e.target.value)}
            >
            </input>

            <input
                placeholder="password"
                onChange={e=> setLoginPassword(e.target.value)}
            >
            </input>

            <button
            onClick={login}
            >submit
            </button><h3>Don't have an account?<button onClick={()=>{setState(false)}}>Click Here</button></h3>

        </div>}
        </div>
        )
}

export default function Auth() {
    //State
    const [registerUsername,setRegisterUsername] = useState(""),
          [loginUsername,setLoginUsername] = useState(""),
          [registerPassword,setRegisterPassword] = useState(""),
          [confirmPassword,setConfirmPassword] = useState(""),
          [loginPassword,setLoginPassword] = useState(""),
          [state,setState] = useState(false);
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
                loginPassword = {loginPassword}
                state={state}
                setState={setState}
            />
            
        </div>
    )
}
