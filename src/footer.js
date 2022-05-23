import React from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"
const Footer = () => {
    return (
        <React.Fragment>
            <section id="contact">
                <hr class="mt-5" />
                <footer>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <h3 class="fw-bold"><span class="text-success">e</span>Grocery</h3>
                                <div class="d-flex">
                                    <Link to="/"><i class="fab fa-linkedin"></i></Link>
                                    <Link to="/"><i class="fab fa-facebook"></i></Link>
                                    <Link to="/"><i class="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <h2 class="fw-bold">Quick Links</h2>
                                <div>
                                    <i class="fas fa-arrow-right"></i>
                                    <Link to="/" class="links">Home</Link>
                                </div>
                                <div>
                                    <i class="fas fa-arrow-right"></i>
                                    <Link to="/" class="links">Categories</Link>
                                </div>
                                <div>
                                    <i class="fas fa-arrow-right"></i>
                                    <Link to="/" class="links">Oragnic</Link>
                                </div>
                                <div>
                                    <i class="fas fa-arrow-right"></i>
                                    <Link to="/" class="links">Offers</Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <h2 class="fw-bold">Contact Info</h2>
                                <div class="d-flex mt-3">
                                    <i class="fas fa-phone mt-1"></i>
                                    <h5 class="ms-3">+91 9983635818.</h5>
                                </div>
                                <div class="d-flex mt-2">
                                    <i class="fas fa-envelope mt-2"></i>
                                    <h5 class="ms-3">snigdha@gmail.com</h5>
                                </div>
                                <div class="d-flex mt-2">
                                    <i class="fas fa-map-marker-alt mt-1"></i>
                                    <h5 class="ms-3">AP,India.</h5>
                                </div>
                            </div>
                            <hr />
                            <p class="text-center">Created by <span class="text-success">Snigdha Bommareddy</span> | All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </section>
        </React.Fragment>
    )
}

export default Footer;