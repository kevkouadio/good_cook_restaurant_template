import "./Menu.css";
function Menu(){
    return (
        <div className="container" id="menu">
            <h1 id="offer-h1">Delicious Menu</h1>
            <p className="card-text" id="offer-p">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
        <div className="align-self-center">
            <ul className="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Breakfast</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Lunch</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Dinner</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="mb-12">
                        <div className="row mb-12">
                            <div className="col-sm-6">
                                <div className="row g-0">
                                    <div className="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Food Name</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="row g-0">
                                    <div className="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Food Name</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="mb-12">
                        <div className="row mb-12">
                            <div className="col-sm-6">
                                <div className="row g-0">
                                    <div className="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Food Name</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="row g-0">
                                    <div className="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Food Name</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="mb-12">
                        <div className="row mb-12">
                            <div className="col-sm-6">
                                <div className="row g-0">
                                    <div className="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Food Name</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="row g-0">
                                    <div className="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Food Name</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Menu;