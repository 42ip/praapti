import { Component } from 'react';
import { Card, CardDeck, ListGroup,ListGroupItem,Button} from 'react-bootstrap';

export default class IMS extends Component {
    render() {
        return (
        <div class="IMS_body">
                <h3>inventory management system</h3>
                <div className="cards">
                    {/* dummy data */}
    <CardDeck>
    <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/4d/c3/dd/4dc3dd3092ecf6237dfae1e9f46c4961.jpg" style={{width: '10rem'}}/>
        <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
     </Card.Text>
    </Card.Body>
    <ListGroup variant="flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
         </ListGroup>
       <Button variant="primary">Go somewhere</Button>
     <Button variant="primary">Go somewhere</Button>               
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://pm1.narvii.com/6731/4e7ba83bd7217874974cde0bdc68bd450ada7688v2_hq.jpg" style={{width: '10rem'}}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
     </Card.Text>
    </Card.Body>
    <ListGroup variant="flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
         </ListGroup>
       <Button variant="primary">Go somewhere</Button>
     <Button variant="primary">Go somewhere</Button>               
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
    <Card>
  <Card.Img variant="top" src="https://static.wikia.nocookie.net/villains/images/4/4c/Eren_meets_Yeagerists.png/revision/latest?cb=20210302172340"style={{width: '10rem'}} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</CardDeck>
                </div>
        </div>
        );
    }
}
