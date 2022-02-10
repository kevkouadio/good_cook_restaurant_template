import "./Home.css"
import Nav from "../Nav/Nav";

function Home() {
    return(
        <div id="home">
            <div className="container">
                <Nav/>
                <div className="align-self-center" id="home-div">
                    <h1 id="home-h1">Welcome To Good Cook</h1>
                        <p id="home-p">Come and eat well with our delicious & healthy foods.</p>
                    <button id="home-btn">Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default Home;