import React from 'react'
import classes from './Modal.module.css'

const inputStyle = {
    padding : '0.4rem',
    boderRadius : '10px',
    margin : '1rem',
    border : 'none',
    outline : 'none',
    
}

const LabelStyle={
    width : '100%',
    fontSize : '1.2rem'
}


export default function Modal({prop,labels,handleSubmit,handleClose}) {
    const inputs = prop.map((elem,id)=>{
            return <><label style={LabelStyle}>{labels[id]}</label><input style={inputStyle} className={classes.inp} ref={elem}></input></>
        })
    return (
        <div className={classes.modal}>
            {inputs}
            <div className={classes.btnC}>
                <button onClick={handleSubmit}>Submit Details</button>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}
