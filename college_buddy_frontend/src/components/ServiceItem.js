import React from 'react'

function ServiceItem(props) {
    return (
        <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src="https://cdn.vox-cdn.com/thumbor/7TzXXGeyMRbOjKE7UDiNXOHlQK0=/0x0:1280x738/1200x800/filters:focal(538x267:742x471)/cdn.vox-cdn.com/uploads/chorus_image/image/65232906/one_piece.0.png" className="card-img-top" alt="..." />
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