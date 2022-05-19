import React from 'react'
import { Link } from "react-router-dom"
function ServiceItem(props) {
    // console.log(props.id)
    const url = "/pg/" + props.id;
    return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://images.hindustantimes.com/img/2021/06/29/550x309/m3_1624953455100_1624953498280.PNG" className="card-img-top" alt="..." />
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