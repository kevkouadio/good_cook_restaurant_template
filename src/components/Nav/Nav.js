import { useState } from "react";
import $ from 'jquery';
//import {Link} from 'react-scroll' 
import "./Nav.css";

function Nav() {
    //make toggle nav to collapsed after clicking on nav link 
    $( document ).ready(function() {
        $('.nav-link, .logo').on("click",function() {
            $(".navbar-collapse").removeClass('show');
            //console.log("clicked")
        });
    }); 
    //make navbar change color after scroll
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY > 100){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (
      <nav className={colorChange ? 'navbar navbar-expand-lg fixed-top navbar-light container scrolled ' : 'navbar navbar-expand-lg navbar-light container'} >
        <div className="container-fluid d-flex flex-row">
            <a className={colorChange ? "navbar-brand mb-0 h1 p-2 logo":"navbar-brand mb-0 h1 p-2"} href="#"><b>GOODCOOK</b></a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
                <ul className="navbar-nav align-items-start">
                    <li className="nav-item p-2" >
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="/" >HOME</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="/about" >ABOUT</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="/offer">OFFER</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="/menu" >MENU</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="/contact" >CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>  
  );
}

export default Nav;