import "./Contact.css";

function Contact() {
    return (
        <div className="container" id="contact">
            <div className="">
                <div className="row">
                    <div className="col-md-6">
                        <div className="text-start">
                            <div className="card-body">
                                <h2 className="card-title">Cook Good Restaurant</h2>
                                <h5 className="card-subtitle mb-2 text-muted"><i className="bi bi-geo-alt"></i> 180 Prospect St. East Orange, New Jersey, 07017</h5>
                                <h5 className="card-subtitle mb-2 text-muted"><i className="bi bi-telephone"></i> +1 862 339 8389</h5>
                                <h5 className="card-subtitle mb-2 text-muted"><i className="bi bi-envelope"></i> info@goodcook-restaurant.com</h5>
                            </div>
                        </div>
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=east%20orange&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-start">
                        <h2 className="card-title mb-2">Send Us a Message</h2>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="John Doe" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-success">Send Message</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Contact;