import React, { Component } from "react";
import ProductListing from "./ProductsListing";
import "./listing.css"
import axios from "axios";
import Costfilter from "../filters/costfilter"
import Sort from "../filters/sortfilter"
import Header from "../../header";

const prodUrl = "https://groceryintern.herokuapp.com/products?category_id="

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productList: '',
            userItem: '',
        };
    }
    addToCart = (data) => {
        console.log(">>>>>", data)
        this.setState({ userItem: data })
    }
    proceed = () => {
        sessionStorage.setItem('products',this.state.userItem)
        this.props.history.push(`/placeorder`)
    }
    setDataPerFilter = (data) => {
        this.setState({ productList: data })
    }
    render() {
        return (
            <>
            <Header/>
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/cc3.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/cc2.jpg" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/cc1.png" class="d-block w-100" alt="..." />
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
                <h2 class="text-center fw-bold mt-5 head">Grocery</h2>
                <hr class="mt-5" />
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 mt-5 sorting">
                            <h4 class="text-center fw-bold head">Sort By</h4>
                            <Costfilter catId={this.props.match.params.catId}
                                catPerCost={(data) => { this.setDataPerFilter(data) }} />
                            <Sort catId={this.props.match.params.catId}
                                catPerSort={(data) => { this.setDataPerFilter(data) }} />
                        </div>
                        <div class="col-lg-10 mt-5">
                        <button className="btn btn-primary proceed" onClick={this.proceed}>Proceed</button>
                            <div class="row ms-4">
                                <ProductListing productData={this.state.productList}
                                finalOrder={(data) => { this.addToCart(data) }} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        let prodid = this.props.match.params.catId;
        sessionStorage.setItem('catId', prodid)
        axios.get(`${prodUrl}${prodid}`)
            .then((res) => { this.setState({ productList: res.data }) })
    }
}
export default Listing