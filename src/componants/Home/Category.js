import React from "react";
import { Link } from "react-router-dom";
import "./firstpage.css"

const Category = (props) => {

    const catogories = ({ catData }) => {
        if (catData) {
            return catData.map((item) => {
                return (
                    <>
                        <div className="col-lg-2 col-md-4 col-6 mt-5">
                            <div className="card" style={{ width: '9rem', border: 'none' }}>
                                <Link to={`/listing/${item.category_id}`} key={item.category_id}><img src={item.category_image} className="card-img-top" alt="..." style={{ borderRadius: '50%', height: '100px', width: '100px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-success">{item.category_name}</h5>
                                    </div></Link>
                            </div>
                        </div>
                    </>
                )
            })
        }

    }

    return (
        <>
            {catogories(props)}
        </>
    )
}

export default Category



