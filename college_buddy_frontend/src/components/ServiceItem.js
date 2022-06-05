import React from "react";
import { Link } from "react-router-dom";
//import '../App.css';
import "../service.css";
function ServiceItem(props) {
//   console.log(props.data.id);
  const url = "/pg/" + props.data.id;
  const imgurl = props.data.image;
  return (
    <div className="my-3">
      <br />
      <br />
      <br />
      <br />
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgurl} className="card-img-top cardImg" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.address}</p>
          <Link to={url} className="btn btn-sm btn-primary">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
