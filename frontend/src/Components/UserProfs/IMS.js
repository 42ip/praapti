import { Component } from 'react';
import { Card, ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import classes from './IMS.module.css'
export default class IMS extends Component {
    render() {
        return (
        <div class="IMS_body">
                <h3>inventory management system</h3>
                <div className={classes.cards}>
                    {/* dummy data */}
                        <div>
                         <Card.Img variant="top" src="https://miro.medium.com/max/3840/1*0Pz2M5lUeaV2wDSY69MFOA.jpeg" style={{width: '10rem'}}/>
                         <Card.Body>
                        <Card.Title>Location 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                         </Card.Body>
                              <ListGroup variant="flush">
                              <ListGroupItem>Cras justo odio</ListGroupItem>
                              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                             </ListGroup>
                         <Button variant="primary">Go somewhere</Button>              
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        </div>
                        <div>
                        <Card.Img variant="top" src="https://i.stack.imgur.com/r2G2V.png" style={{width: '10rem'}}/>
                         <Card.Body>
                          <Card.Title>Location 2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                         </Card.Body>
                              <ListGroup variant="flush">
                              <ListGroupItem>Cras justo odio</ListGroupItem>
                              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                             </ListGroup>
                         <Button variant="primary">Go somewhere</Button>              
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>               
                        </div>
                        <div>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMVvWM5CybtaeZIZaxWCBbQVlK3WqbsH-gdItQvOdvpUAav3lgOarJS0l63nhMHOf4JOQ&usqp=CAU"style={{width: '10rem'}} />
                            <Card.Body>
                            <Card.Title>Location 3</Card.Title>
                            <Card.Text>
                                 Some quick example text to build on the card title and make up the bulk of
                                 the card's content.
                            </Card.Text>
                            </Card.Body>
                            <ListGroup variant="flush">
                              <ListGroupItem>Cras justo odio</ListGroupItem>
                              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                             </ListGroup>
                            <Button variant="primary">Go somewhere</Button>
                         <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer> 
                        </div>
                </div>
            </div>
        );
    }
}
