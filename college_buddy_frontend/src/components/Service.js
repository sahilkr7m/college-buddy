import React, { useState, useEffect } from 'react'
import ServiceItem from './ServiceItem'

function Service() {
    const [service, setService] = useState(null)
    useEffect(() => {
        fetch("http://localhost:3000/api/pg")
            .then(resp => {
                if (resp.ok === false) {
                    console.log('error!')
                }
                else {
                    return resp.json();
                }

            })
            .then(data => setService(data))
            .catch(err => { console.log(err) });
    }, [])

    return (
        <div className='container my-3'>
            {service && <div className="row">
                {service.map((element) => {
                    return <div className="col-md-4" key={element.id}>
                        <ServiceItem id = {element.id} name={element.name} address={element.address} />
                    </div>
                })}
            </div>}

        </div>
    )
}

export default Service