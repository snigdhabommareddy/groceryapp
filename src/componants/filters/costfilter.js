import React, { Component } from "react";
import axios from "axios";

const url = "https://groceryintern.herokuapp.com/filter"

class Costfilter extends Component {

    filterCost=(event)=>{
        let catId = this.props.catId
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1];
        let costUrl = ""
        if(event.target.value === ""){
            costUrl = `${url}/${catId}`
        }else{
            costUrl = `${url}/${catId}?lcost=${lcost}&hcost=${hcost}`
        }
        axios.get(costUrl)
        .then((res) => {this.props.catPerCost(res.data)})

    }

    render() {
        return (
            <>
            <h4 className="text-center text-success mt-5">Cost Filter</h4>
            <div className="mt-4" onChange={this.filterCost}>
                <label className="radio d-flex ms-3 mt-3">
                    <input type="radio" value="1-99" name="cost" className="mt-2"/>1-99
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="100-300" name="cost" className="mt-2"/>100-300
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="301-500" name="cost" className="mt-2"/>301-500
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="501-700" name="cost" className="mt-2"/>501-700
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="701-1000" name="cost" className="mt-2"/>701-1000
                </label>
                <label className="radio d-flex ms-3 mt-2">
                    <input type="radio" value="1001-2500" name="cost" className="mt-2"/>1001-2500
                </label>
            </div>
            </>
        )
    }
}
export default Costfilter