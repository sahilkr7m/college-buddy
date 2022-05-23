import React from 'react'
import { Link } from "react-router-dom"
import '../App.css';
function ServiceItem(props) {
    // console.log(props.id)
    const url = "/pg/" + props.id;
    const imgurl = props.image;
    return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src={imgurl} className="card-img-top cardImg" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.address}</p>
                        <Link to = {url} className="btn btn-sm btn-primary">More Info</Link>
                    </div>
            </div>
        </div>
    )
}

export default ServiceItem