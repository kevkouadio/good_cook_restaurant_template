
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Offer from './components/Offer/Offer';
import Menu from './components/Menu/Menu';


function App() {
  
  return (
    <div className="App">
        <Home />
        <About />
        <Offer />
        <Menu />
    </div>
  );
}

export default App;
