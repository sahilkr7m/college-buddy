import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function ServiceDetail() {
    const { id } = useParams();
    const [detail, setDetail] = useState(null)
    
    useEffect(() => {
        async function fetchData(){
            let response = await fetch(`http://localhost:3000/api/pg/${id}`)
            response = await response.json()
            console.log(response)
            setDetail(response)
        }
        fetchData();
    },[])
  return (
    <div>
        <h1>Hello</h1>
        { detail && <p>{detail.name}</p>}
    </div>
  )
}

export default ServiceDetail