import React, { useState, useEffect } from 'react'
import ServiceItem from './ServiceItem'

function Service() {
    // const ser = [
    //     {
    //         "id": 1,
    //         "name": "Vychita PG",
    //         "address": "Ckg tower, Near silk factory, vidyaranapuram",
    //         "phone": "1234567890",
    //         "rent": 6000
    //     },
    //     {
    //         "id": 2,
    //         "name": "Voilet PG",
    //         "address": "Near Nie admin block",
    //         "phone": "1234567890",
    //         "rent": 6000
    //     }
    // ];
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
                        <ServiceItem name={element.name} address={element.address} />
                    </div>
                })}
            </div>}

        </div>
    )
}

export default Service