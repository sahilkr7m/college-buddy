import React from 'react'
import ServiceItem from './ServiceItem'

function Service() {
    return (
        <div className='container my-3'>
            <div className="row">
                <div className="col-md-4">
                    <ServiceItem name="Vychita" address="Ckg tower PG" />
                </div>
                <div className="col-md-4">
                    <ServiceItem name="Vychita" address="Ckg tower PG" />
                </div>
                <div className="col-md-4">
                    <ServiceItem name="Vychita" address="Ckg tower PG" />
                </div>
            </div>
        </div>
    )
}

export default Service