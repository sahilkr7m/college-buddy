import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

function ServiceDetail(props) {
    const { id } = useParams();
    const [detail, setDetail] = useState(null)
    
    useEffect(() => {
        async function fetchData(){
            let response = await fetch(`http://localhost:3000/api/${props.category}/${id}`)
            response = await response.json()
            setDetail(response[0]);
        }
        fetchData();
    },[])
  return (
    <div>
        { detail && <img src={detail.image} />}
    </div>
  )
}

export default ServiceDetail