import React from 'react'

function ServiceItem(props) {
    console.log(props)
    return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.address}</p>
                        <a href="/serviceDetail" className="btn btn-sm btn-primary">More Info</a>
                    </div>
            </div>
        </div>
    )
}

export default ServiceItem