import './App.css';
import farmer from './images/farmer.png';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
        <div className="farmer">
            <img src={farmer} alt="farmer with his donkey"/>    
        </div>
        <Footer />  
    </div>
  );
}

export default App;
