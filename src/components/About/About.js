import"./About.css"

function About(){
    return (
        <div className="container" id="about">
            <div className="row" id="about-row">
                <div className="col-sm-6">
                        <div className="card-body">
                            <h5 className="card-title" id="about-h5">OUR STORY</h5>
                            <h1 id="about-h1">Welcome</h1>
                            <p className="card-text" id="about-p">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                                there live the blind texts. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                            <button id="about-btn">Learn More About Us</button>
                        </div>
                </div>
                <div className="col-sm-6">
                    <div className="card" id="about-img">
                        <img id="about-img" src="https://cdn.winsightmedia.com/platform/files/public/800x420/chef-demo-cooking-saucing-dish.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;