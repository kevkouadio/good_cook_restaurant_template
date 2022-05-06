
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
//import Nav from './components/Nav/Nav';
//import Offer from './components/Offer/Offer';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
//import Card from './components/Card/Card';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';


function App() {
  
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/menu" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
