import React,{useState,useEffect} from 'react'
import classes from './Profile.module.css'






export default function Profile() {
    const [modal,setModal] = useState(false);
    const [userData,setUserData] = useState([
        "Tirtharaj Sengupta",
        "93432532532526",
        "Indian",
        "West Bengal",
        "Kolkata",
        9830020322,
        69
    ]);



    return (
        <div className={classes.top}>
            <div className={classes.picture}>
                <img src={"http://www.fillmurray.com/300/300"}></img>
                <button className={classes.btn}>Upload Documents</button><br/><br/>
                <button className={classes.btn}>View My Applications</button>
            </div>
            
            <div className={classes.details}>
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>Name</p>
                    </div>
                    <div className={classes.info}>
                        <p>{userData[0]}</p>
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>Aadhar Number</p>
                    </div>
                    <div className={classes.info}>
                        <p>{userData[1]}</p>
                    </div>
                </div >
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>Nationality</p>
                    </div>
                    <div className={classes.info}>
                        <p>{userData[2]}</p>
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>Native State</p>
                    </div>
                    <div className={classes.info}>
                        <p>{userData[3]}</p>
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>City</p>
                    </div>
                    <div className={classes.info}>
                        <p>{userData[4]}</p>
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>Phone Number</p>
                    </div>
                    <div className={classes.info}>
                        <p>{userData[5]}</p>
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>Applications</p>
                    </div>
                    <div className={classes.info}>
                        <p>{userData[6]}</p>
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <div className={classes.labels}>
                        <p>Check Documents</p>
                    </div>
                    <div className={classes.info}>
                        <p>Click Here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
