
function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid d-flex flex-row">
            <span className="navbar-brand mb-0 h1 p-2"><a>Good Cook</a></span>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                Menu <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav align-items-start">
                    <li className="nav-item p-2 ">
                        <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item p-2">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className="nav-link" href="#">Offer</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className="nav-link">Menu</a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>  
    
  );
}

export default Nav;