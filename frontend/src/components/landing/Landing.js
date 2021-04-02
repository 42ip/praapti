import axios from 'axios';
import React,{useEffect} from 'react'

export default function Landing({user}) {
    useEffect(()=>{
        console.log("Authed User is"+localStorage.getItem("user"));
    },[]);
    return (
        <div>
            Nice
        </div>
    )
}
