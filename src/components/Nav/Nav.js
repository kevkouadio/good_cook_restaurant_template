import { useState } from "react";
import "./Nav.css";

function Nav() {
    //make navbar change color after scroll
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY > 400){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

  return (
      <nav className={colorChange ? 'navbar navbar-expand-lg fixed-top navbar-light container scrolled' : 'navbar navbar-expand-lg navbar-light container'}>
        <div className="container-fluid d-flex flex-row">
            <a className={colorChange ? "navbar-brand mb-0 h1 p-2 logo":"navbar-brand mb-0 h1 p-2"} href="#home"><b>GOODCOOK</b></a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-start">
                    <li className="nav-item p-2 ">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="#home">HOME</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="#">OFFER</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={colorChange ? "nav-link Navlink" :"nav-link"} href="#">MENU</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>  
  );
}

export default Nav;