
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Offer from './components/Offer/Offer';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';


function App() {
  
  return (
    <div className="App">
        <Home />
        <About />
        <Offer />
        <Menu />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
