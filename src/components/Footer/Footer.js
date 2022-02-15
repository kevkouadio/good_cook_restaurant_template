function Footer() {
    return (
            <footer className="py-3 my-4 bg-dark">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3 bg-dark">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link px-2 text-muted">About</a></li>
                    <li className="nav-item"><a href="#offer" className="nav-link px-2 text-muted">Offer</a></li>
                    <li className="nav-item"><a href="#menu" className="nav-link px-2 text-muted">Menu</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link px-2 text-muted">Contact Us</a></li>
                </ul>
                <p className="text-center text-muted">© 2021 Good Cook Company, Inc</p>
                <p className="text-center text-muted">website buid by <a href="https://kevkouadio.github.io/kk-react-portofolio/" target="blanck">Kouassi Kevin Kouadio</a></p>
            </footer>
    )
}
export default Footer;