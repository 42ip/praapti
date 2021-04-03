import React from 'react'

export default function Modal({props}) {
    const inputs = ()=>{
        props.map((elem,id)=>{
            <input className={classes.Input} ref={elem}></input>
        })
    }
    return (
        <div>
            {inputs}
        </div>
    )
}
