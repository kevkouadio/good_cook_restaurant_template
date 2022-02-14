import "./Menu.css";
function Menu(){
    return (
        <div className="container">
            <h1 id="offer-h1">Delicious Menu</h1>
            <p className="card-text" id="offer-p">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
        <div class="align-self-center">
            <ul class="nav nav-pills mb-4 justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Breakfast</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Lunch</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Dinner</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="mb-12">
                        <div class="row mb-12">
                            <div className="col-sm-6">
                                <div class="row g-0">
                                    <div class="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Food Name</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="row g-0">
                                    <div class="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Food Name</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="mb-12">
                        <div class="row mb-12">
                            <div className="col-sm-6">
                                <div class="row g-0">
                                    <div class="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Food Name</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="row g-0">
                                    <div class="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Food Name</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div class="mb-12">
                        <div class="row mb-12">
                            <div className="col-sm-6">
                                <div class="row g-0">
                                    <div class="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Food Name</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <h5 className="card-title food-price">Price</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="row g-0">
                                    <div class="col-md-4 align-self-center">
                                        <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img" alt="..."/>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Food Name</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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