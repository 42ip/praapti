import React,{useState,useRef, useEffect} from 'react'
import classes from './Profile.module.css'
import Modal from '../Modal/Modal'
import {useHistory} from 'react-router-dom'
import axios from 'axios'



export default function Profile() {
    const history = useHistory();
    const [modal,setModal] = useState(false);
    const [userData,setData] = useState([
        ["Name","Tirtharaj Sengupta"],
        ["Aadhar","93432532532526"],
        ["Nationality","Indian"],
        ["State","West Bengal"],
        ["City","Kolkata"],
        ["Number",9830020322],
        ["Applications",69]
    ]);
    const cityRef=useRef();
    const nationRef = useRef();
    const nativeRef = useRef();

    const handleSubmit = ()=>{
        const city = cityRef.current.value;
        const nation = nationRef.current.value;
        const native = nativeRef.current.value;

        const newData = userData.map((elem,id)=>{
            if (elem[0]==="City") return [elem[0],city];
            else if (elem[0]==="Nationality") return [elem[0],nation];
            else if (elem[0]==="State") return [elem[0],native];
            else{
                return elem
            }
        })
        axios({
            method : 'post',
            data : {
                id : localStorage.getItem("_id"),
                city : city,
                nation : nation,
                native : native
            },
            url : "https://backend0x5a.herokuapp.com/updateWorkerDetails"
        })
        setData(newData);
        handleClose();
    }
    const handleClose = () =>{
        setModal(false);
    }

    const handleOpen = ()=>{
        setModal(true);
    }

    const handleRedirect = ()=>{
        history.push("/job")
    }
    useEffect(()=>{
        axios({
            method : 'post',
            url : 'https://backend0x5a.herokuapp.com/getWorkerDetails',
            data : {
                id : localStorage.getItem("_id")
            }
        })
        .then((res)=>{
            if (res.status === 201){
                console.log(res.data)
                const {username,aadhar,nation,state,city,phone,applications} = res.data;
                setData([["Name",username],["Aadhar",aadhar],["Nationality",nation],["State",state],["City",city],["Phone Number",phone],["Applications",applications]]);
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    })

    const table = userData.map((elem,id)=>{
        return      <div className={classes.infoBox} key={id}>
                        <div className={classes.labels}>
                            <p>{elem[0]}</p>
                        </div>
                        <div className={classes.info}>
                            <p>{elem[1] !== undefined ? elem[1] : `Please update Details`}</p>
                        </div>
                    </div>
                
    })

    const prop = [cityRef,nationRef,nativeRef]
    const labels= ['City','Nation','Native State']
    return (
        <>
        {
            modal? <Modal
                    prop = {prop}
                    labels = {labels}
                    handleSubmit={handleSubmit}
                    handleClose={handleClose}/> 
            :
            <div className={classes.top}>
                <div className={classes.picture}>
                    <img src={"http://www.fillmurray.com/300/300"} alt="murray"></img>
                    <button className={classes.btn} onClick = {handleOpen}>Update Details</button><br/><br/>
                    <button className={classes.btn} onClick={handleRedirect}>Applications</button>
                </div>
                <div className={classes.details}>
                    {table}
                </div>
            </div>
        }
        </>
    );
}         
            
            
                /* <div className={classes.infoBox}>
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
        </div> */
