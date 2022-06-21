import React from 'react'
import { Link } from "react-router-dom"
import '../blog.css'

function BlogItem(props) {
    const url = "/blog/" + props.data.id;
    const imgurl = "https://cdn.mos.cms.futurecdn.net/nfZYT7SrLCY5EaaPVSScLG.png";
    return (
        
        <div>
            <div class="my-3 container">
  <div class="card">
    <div class="card__header">
      <img src={imgurl} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <span class="tag tag-blue">Technology</span>
      <h4>{props.data.create_date}</h4>
      <p>{props.data.blog_data}</p>
    </div>
    
  </div>
  
</div>
        
        {/* <div className='my-3'>
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
        </div> */}
        </div>
    )    
}

export default BlogItem