import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to={process.env.PUBLIC_URL + "/"} className={process.env.PUBLIC_URL + location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
        </li>
        <li className="nav-item">
          <Link
            to={process.env.PUBLIC_URL + "/about"}
            className={process.env.PUBLIC_URL + location.pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to={process.env.PUBLIC_URL + "/contact"}
            className={process.env.PUBLIC_URL + location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <a className={process.env.PUBLIC_URL + location.pathname === "/menu" ? "nav-link active" : "nav-link"}>MENU</a>
        </li>
      </ul>
      </div>
      </nav>
    );
  }
  
  export default Navbar;