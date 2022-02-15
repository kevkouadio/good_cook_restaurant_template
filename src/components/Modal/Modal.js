function Modal(){
    return(
        <>
        <button id="home-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Reservation
                    </button>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-lg">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-center fs-1" id="staticBackdropLabel">Reserve A Table</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-start">
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col-md">
                                                <label for="exampleFormControlInput1" className="form-label">First Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John"/>
                                            </div>
                                            <div className="col-md">
                                                <label for="exampleFormControlInput1" className="form-label">Last Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Doe"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                    </div>
                                    <div className="row">
                                            <div className="col-md">
                                                <label for="exampleFormControlInput1" className="form-label">How Many People</label>
                                                <select className="form-select" aria-label="Default select example">
                                                    <option selected>Select</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="3">4+</option>
                                                </select>
                                            </div>
                                            <div className="col-md">
                                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="999-999-9999"/>
                                            </div>
                                    </div>
                                    <br/>
                                    <div className="row">
                                            <div className="col-md">
                                                <label for="exampleFormControlInput1" className="form-label">Date</label>
                                                <input type="date" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                            <div className="col-md">
                                                <label for="exampleFormControlInput1" className="form-label">Time</label>
                                                <input type="time" className="form-control" id="exampleFormControlInput1" />
                                            </div>
                                    </div>
                                    <br/>
                                    <div className="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="modal-btn-div">
                                    <button type="button" className="btn btn-warning btn-lg">Reserve Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
    )
}

export default Modal;