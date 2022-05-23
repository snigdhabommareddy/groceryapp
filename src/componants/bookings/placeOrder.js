import React, { Component } from "react";
import "./placeOrder.css"
import Header from "../../header";

const url="https://groceryintern.herokuapp.com/menuItem"
const postData="http://localhost:8900/orders"

class Placeorder extends Component{
    constructor(props){
        super(props);
        let userData = sessionStorage.getItem('userInfo')

        this.state={
            id:Math.floor(Math.random()*100000),
            name: userData? userData.split(',')[0]:'',
            email:userData? userData.split(',')[1]:'',
            cost:0,
            phone:userData? userData.split(',')[2]:'',
            address:'Hno 28',
            menuItem:''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }
    checkout = () => {
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem('products');
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
      // .then(this.props.history.push('/viewBooking'))
      .then(console.log('order taken'))
       
    }
    renderMenu = (data) => {
        if(data){
            return data.map((item) => {
                return (
                 <div className="row mt-5" key={item.id}>
                     <div className="col-md-5 d-flex">
                         <b className="me-3">{item.id}.</b>
                         <img src={item.img} alt={item.name} style={{ width: 80, height: 80 }} />
                         <p className='text-success mt-4 ms-5'>{item.name}</p>
                     </div>
                     <div className='col-md-3 mt-4'>
                         <b className='text-danger ms-5'> Rs.{item.price}</b>
                     </div>
                 </div>
                )
            })
        }
    }
    
    render(){
            if(sessionStorage.getItem('loginStatus') === 'loggedOut'){
                return(
                    <>
                        <Header/>
                        <center>
                            <h2 className="mt-5 text-danger">Login First To Place Order</h2>
                        </center>
                    </>
    
                )
            }
            console.log(this.state)
        return(
            <>
            <Header/>
             <div className="container">
                    <div className="mt-5 panel">
                        <div className="title p-3">
                            <h3>Your Order from Grocery</h3>
                        </div>
                        <div className="body">
                        <form action="https://edurekagrocerypayment.herokuapp.com/paynow" method="POST">
                                <input type="hidden" name="cost" value={this.state.cost}/>
                                <input type="hidden" name="id" value={this.state.id}/>
                                <div className="row mt-4">
                                    <div className="form-group col-md-6">
                                        <label for="fname">Name</label>
                                        <input id="fname" name="name" className="form-control"
                                        value={this.state.name} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="email">Email</label>
                                        <input id="email" name="email" className="form-control"
                                        value={this.state.email}  onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6 mt-4 mb-4">
                                        <label for="phone">Phone</label>
                                        <input id="phone" name="phone" className="form-control"
                                        value={this.state.phone} onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group col-md-6 mt-4 mb-4">
                                        <label for="address">Address</label>
                                        <input id="address" name="address" className="form-control"
                                        value={this.state.address}  onChange={this.handleChange}/>
                                    </div>
                                </div>
                                {this.renderMenu(this.state.menuItem)}
                                <hr/>
                                <div className="row">
                                    <div className="col-md-12 mt-5 ms-5">
                                        <h2 className="text-secondary price">Total Price is Rs/- 
                                        &nbsp;&nbsp;&nbsp;{this.state.cost}</h2>
                                    </div> 
                                </div>
                                <button className="btn btn-success submit"
                                type="submit" onClick={this.checkout}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        let menuItem = sessionStorage.getItem('products')
        let orderId = [];
        menuItem.split(',').map((item) => {
            orderId.push(parseInt(item));
            return 'ok'
        })
        fetch(url,{
            method: 'POST',
            headers: {
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderId)
        })
        .then((res) => res.json())
        .then((data) => {
            let totalPrice = 0;
            data.map((item) => {
                totalPrice += parseFloat(item.price)
                return 'ok'
            })
            this.setState({cost: totalPrice, menuItem:data})
        })
    }
}
export default Placeorder