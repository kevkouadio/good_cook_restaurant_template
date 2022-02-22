
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Offer from './components/Offer/Offer';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Card from './components/Card/Card';


function App() {
  
  return (
    <div className="App">
        <Home />
        <About />
        <Offer />
        <Menu />
        <Contact />
        <Footer />
        <Card />
    </div>
  );
}

export default App;
