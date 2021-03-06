import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Offer.css"

function Offer() {

    return (
        <div id="offer">
            <div className="container">
                <h5 className="card-title" id="offer-h5">OUR OFFERS</h5>
                <h1 id="offer-h1">Our Offer This Summer</h1>
                <p className="card-text" id="offer-p">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the blind texts.
                </p>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card offer-card" >
                                    <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title food-price">Price</h5>
                                        <h5 className="card-title">Food name</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <button className='orderNow-btn align-self-center'>Order Now</button>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card offer-card" >
                                    <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title food-price">Price</h5>
                                        <h5 className="card-title">Food name</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <button className='orderNow-btn align-self-center'>Order Now</button>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="card offer-card" >
                                    <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title food-price">Price</h5>
                                        <h5 className="card-title">Food name</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <button className='orderNow-btn align-self-center'>Order Now</button>
                                </div>
                            </div>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card offer-card">
                                    <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title food-price">Price</h5>
                                        <h5 className="card-title">Food name</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <button className='orderNow-btn align-self-center'>Order Now</button>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card offer-card" >
                                    <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title food-price">Price</h5>
                                        <h5 className="card-title">Food name</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <button className='orderNow-btn align-self-center'>Order Now</button>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card offer-card" >
                                    <img src="https://www.thedailymeal.com/sites/default/files/2020/08/20/soulfood2.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title food-price">Price</h5>
                                        <h5 className="card-title">Food name</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                    <button className='orderNow-btn align-self-center'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        </div>
    )
}
export default Offer;