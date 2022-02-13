import "./Home.css"
import Nav from "../Nav/Nav";

function Home() {
    return(
        <div id="home">
            <Nav/>
            <div className="container">
                <div className="align-self-center" id="home-div">
                    <h1 id="home-h1">Welcome To Good Cook</h1>
                        <p id="home-p">Come and eat well with our delicious & healthy foods.</p>
                    <button id="home-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Reservation
                    </button>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                <div class="modal-content">
                                <div class="modal-header ">
                                    <h5 class="modal-title text-center fs-1" id="staticBackdropLabel">Reserve A Table</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-start">
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col-md">
                                                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="John"/>
                                            </div>
                                            <div class="col-md">
                                                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Doe"/>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                    </div>
                                    <br/>
                                    <div class="row">
                                            <div class="col-md">
                                                <label for="exampleFormControlInput1" class="form-label">How Many People</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected>Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="3">4+</option>
                                                </select>
                                            </div>
                                            <div class="col-md">
                                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Doe"/>
                                            </div>
                                    </div>
                                    <br/>
                                    <div class="row">
                                            <div class="col-md">
                                                <label for="exampleFormControlInput1" class="form-label">Date</label>
                                                <input type="date" class="form-control" id="exampleFormControlInput1" />
                                            </div>
                                            <div class="col-md">
                                                <label for="exampleFormControlInput1" class="form-label">Time</label>
                                                <input type="time" class="form-control" id="exampleFormControlInput1" />
                                            </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="modal-btn-div">
                                    <button type="button" class="btn btn-warning btn-lg">Reserve Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;