import React from 'react'
import { Link } from "react-router-dom"
import '../service.css'

function BlogItem(props) {
    const url = "/blog/" + props.id;
    const imgurl = "https://cdn.mos.cms.futurecdn.net/nfZYT7SrLCY5EaaPVSScLG.png";
    return (
        
        <div className='my-3'>
            <br />
            <br />
            <br />
            <br />
            <div className="card" style={{width: "18rem"}}>
                <img src={imgurl} className="card-img-top cardImg" />
                    <div className="card-body">
                        <h5 className="card-title">{props.data.create_date}</h5>
                        <p className="card-text">{props.data.blog_data}</p>
                        <Link to = {url} className="btn btn-sm btn-primary">More Info</Link>
                    </div>
            </div>
        </div>
    )    
}

export default BlogItem