import { Component } from 'react';
import farmer from '../images/farmer.png';

export default class Home extends Component {
    render() {
        return (
        <div>
         <div className="farmer">
            <img src={farmer} alt="farmer with his donkey"/>    
        </div>
        <div class="container">
            <div class="LandLords">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
            <div class="workers">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
        </div>
        <div class="button_container">
        <button class="log">Login / SignUp</button>
        </div>
        </div>
        );
    }
}