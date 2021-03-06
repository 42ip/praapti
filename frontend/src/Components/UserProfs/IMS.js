import React,{ useState,useRef } from 'react';
import { Card,Button} from 'react-bootstrap';
import classes from './IMS.module.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal'
export default function IMS(){

        const [modal,setModal] = useState(false);
        const handleModal = ()=>{
            setModal(!modal);
        }
        const handleSubmit = ()=>{
            console.log("lol")
        }
        const loc = useRef();
        const state = useRef();
        const employees = useRef();
        const taxes = useRef();
        const prevYield = useRef();
        const img = useRef();

        const prop = [loc,state,employees,taxes,prevYield,img];
        const labels = ["Location","State","Number of Employees","Taxes Due","Previous Yield","Image"];
        
        return (
            <>
            {!modal?
        <div class="IMS_body">
                <h1 style={{color:'#52734D'}} className={classes.Title}>Inventory management system</h1>
                <div className={classes.cards}>
                    {/* dummy data */}
                        <div className={classes.item}>
                         <Card.Img variant="top" className={classes.top_img} src="https://miro.medium.com/max/3840/1*0Pz2M5lUeaV2wDSY69MFOA.jpeg" />
                         <Card.Body>
                        <Card.Title className={classes.card_title}>Location 1</Card.Title>
                        <Card.Text className={classes.card_text}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. Lorem is a dummy text that is used very frequently.
                        </Card.Text>
                        </Card.Body>
                        <Link to="/sf">
                         <Button variant="primary" className={classes.addBtn}>Update Details</Button>          
                         
                        </Link>
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        </div>
                        <div className={classes.item}>
                        <Card.Img variant="top" className={classes.top_img} src="https://i.stack.imgur.com/r2G2V.png" />
                         <Card.Body>
                          <Card.Title className={classes.card_title}>Location 2</Card.Title>
                        <Card.Text className={classes.card_text}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content. Lorem is a dummy text that is used very frequently.
                        </Card.Text>
                        </Card.Body>
                            <Link to="/sf">
                                <Button variant="primary" className={classes.addBtn}>Update details</Button>
                            </Link>
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>               
                        </div>
                        <div className={classes.item}>
                            <Card.Img variant="top" className={classes.top_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVvWM5CybtaeZIZaxWCBbQVlK3WqbsH-gdItQvOdvpUAav3lgOarJS0l63nhMHOf4JOQ&usqp=CAU"/>
                            <Card.Body>
                            <Card.Title className={classes.card_title}>Location 3</Card.Title>
                            <Card.Text className={classes.card_text}>
                                 Some quick example text to build on the card title and make up the bulk of
                                 the card's content. Lorem is a dummy text that is used very frequently.
                            </Card.Text>
                        </Card.Body>
                           <Link to="/sf"> 
                            <Button variant="primary" className={classes.addBtn}>Update details</Button>
                            </Link>
                         <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> 
                        </div>
                </div>
                <Button variant="primary" onClick={handleModal} className={classes.addBtn}>Add Field</Button>
            </div>:<Modal
                prop = {prop}
                labels = {labels}
                handleSubmit={handleSubmit}
                handleClose = {handleModal}
            />}
            </>
        );
    
}
