import React, { Component } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import "./firstpage.css"

const url = "https://groceryintern.herokuapp.com/category"

class Firstpage extends Component {
    constructor() {
        super()

        this.state = {
            category: ''
        }
    }

    render() {
        return (
            <>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/images/groceries/banner1.jpg" className="d-block w-100 img-responsive" alt="..." />
                        </div>
                    </div>
                </div>
                <h1 class=" heading mt-5 text-center text-danger"><span>Categories</span> </h1>
                <div class="container mt-2 bg-white">
                    <div class="row ms-1">
                        <Category catData={this.state.category} />
                    </div>
                </div>
                <div class="container mt-2">
                    <div>
                        <img src="/images/banner1.jpg" alt="banner" class="d-block w-100 img-responsive" style={{ height: '250px' }} />
                    </div>
                    <div class="mt-4">
                        <img src="/images/banner2.jpg" alt="banner" class="d-block w-100 img-responsive" style={{ height: '250px' }} />
                    </div>
                </div>
                <h1 class="heading mt-5 text-center text-danger"><span>Offers</span></h1>
                <div class="container mt-2">
                    <div class="row mt-2">
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="card mt-4" style={{ width: '18rem' }}>
                                <Link to="./Listing/listing.js"> <img src="images/offer1.jpg" class="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="card mt-4" style={{ width: '18rem' }}>
                            <Link to="./Listing/listing.js"><img src="images/offer2.jpg" class="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="card mt-4" style={{ width: '18rem' }}>
                            <Link to="./Listing/listing.js"><img src="images/offer3.jpg" class="card-img-top" alt="..." /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner mt-5">
                        <div class="carousel-item active">
                            <img src="images/car1.jpg" class="d-block w-100" alt="..." style={{ height: '250px' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="images/car2.jpg" class="d-block w-100" alt="..." style={{ height: '250px' }} />
                        </div>
                        <div class="carousel-item">
                            <img src="images/car3.jpg" class="d-block w-100" alt="..." style={{ height: '250px' }} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <h1 class="heading mt-5 text-center text-danger"><span>Organic</span></h1>
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-lg-6 col-12">
                        <Link to="./Listing/listing.js"><img src="/images/organic.png" alt="organic" class="imgorganic" /></Link>
                        </div>
                        <div class="col-lg-6 col-12">
                            <h1 class="text-center text-success mt-5">"Let Food Be The Medicine And Medicine Be The Food."</h1>
                            <p class="text-center fw-bold mt-4">Organic food is Healthy.Organic Growth is Healthy.On being organic and Natural Rather than using fertilizer based products that go Bad.</p>
                            <div class="text-center">
                                <button class="btn btn-outline-danger">Learn More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ category: data })
            })
    }
}
export default Firstpage