import { Component } from 'react';
import farmer from '../images/farmer.png';
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
        <div class="secondary_body">
         <div className="farmer">
            <img src={farmer} alt="farmer with his donkey"/>    
        </div>     
        <div className="container">
            <div className="LandLords">Out of 14.3 crores farmers only fifteen percent own their land, due to the pandemic situation municipalitites, local government bodies such as gram panchayats has shutdown due to the government guidlines. Thus, We aim to make land management simpler.</div>
            <div className="workers">The pandemic has witnessed an unprecidented drop in employment, consequently a huge influx of workers is expected to happen after the lockdown is over. We aim to provide the infrastructure to handle this massive influx and streamlined employment. </div>
        </div>
            <div className="button_container">
             <Link to="/reg">
             <button type="button" className="log">
             Login / SignUp
             </button>
            </Link>      
        </div>
        </div>
        );
    }
}
