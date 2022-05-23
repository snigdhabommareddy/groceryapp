import React, { Component } from 'react';

import "./listing.css"

class ProductListing extends Component {

    orderId = []

    addItem = (id) => {
        this.orderId.push(id)
        this.props.finalOrder(this.orderId)
    }
    removeItem = (id) => {
        if (this.orderId.indexOf(id) > -1) {
            this.orderId.splice(this.orderId.indexOf(id), 1)
        }
    }


    renderCart = (orders) => {
        if (orders) {
            return orders.map((item, index) => {
                return (
                    <b key={index}>{item}  &nbsp; &nbsp;</b>
                )
            })
        }
    }

     renderData = ({ productData }) => {
        if (productData) {
            if (productData.length > 0) {
                return productData.map((item) => {
                    return (

                        <div class="grocerycard col-lg-4 col-md-6 col-12 mt-4 me-4" style={{ width: '17rem' }} key={item.category_id}>
                            <img src={item.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center fw-bold text-danger">{item.name}</h5>
                                <p class="card-text text-secondary text-center">{item.description}</p>
                                <p class="card-text text-danger text-center">Rs.{item.price}</p>
                                <button className="btn btn-success ms-2"
                                    onClick={() => { this.addItem(item.id) }}>
                                    <b>Add to Cart</b>
                                </button> &nbsp;
                                <button className="btn btn-danger ms-2"
                                    onClick={() => { this.removeItem(item.id) }}>
                                    <b>Remove</b>
                                </button>
                            </div>
                        </div>

                    )
                })
            } else {
                return (
                    <>
                        <h2>No Data For Filter</h2>
                    </>
                )
            }
        } else {
            return (
                <>
                    <img src="/images/loader.gif" alt="loader" />
                    <h1>Loading.....</h1>
                </>

            )
        }
    }
    render() {
        return (
            <>
                    <p className='text-secondary'> 
                    Item Number {this.renderCart(this.orderId)} Added
                    </p>
                    <div>
                        {this.renderData(this.props)}
                    </div>
                
            </>
        )
    }
}

export default ProductListing

