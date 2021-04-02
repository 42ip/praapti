import { Component } from 'react';
import farmer from '../images/farmer.png';

export default class Home extends Component {
    render() {
        return (
         <div className="farmer">
            <img src={farmer} alt="farmer with his donkey"/>    
        </div>
        );
    }
}