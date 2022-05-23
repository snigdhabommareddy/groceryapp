import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Footer from './footer';
import Home from './componants/Home/home';
import Listing from './componants/Listing/listing'
import Placeorder from './componants/bookings/placeOrder';
import ViewOrder from './componants/bookings/viewOrder';
import Login from './componants/logiin/login';
import Register from './componants/logiin/register';

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/listing/:catId" component={Listing}/>
                    <Route exact path="/placeorder" component={Placeorder}/>
                    <Route exact path="/viewBooking" component={ViewOrder}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Router