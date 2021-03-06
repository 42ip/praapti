import { Component } from 'react';
import { Card,Button} from 'react-bootstrap';
import classes from './Job.module.css';

export default class Job extends Component {
    render() {
        return (
        <div class="IMS_body">
                <h1 style={{color:'#52734D'}} className={classes.Title}>Job Portal</h1>
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
                            <Button variant="primary" className={classes.addBtn} href="https://www.youtube.com/watch?v=xvFZjo5PgG0">Apply Here!</Button>          
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
                                <Button variant="primary" className={classes.addBtn}>Apply Here!</Button>
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
                            <Button variant="primary" className={classes.addBtn}>Apply Here!</Button>
                         <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> 
                        </div>
                </div>
            </div>
        );
    }
}
