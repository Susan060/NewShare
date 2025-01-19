
import React, { Component } from "react";

export class Newsitem extends Component {
    
  render() {
   let {title,description,imgUrl,newsUrl,author,date,source}= this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left:'90%', zIndex:1 }}>
    {source}
    </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {author} on Date: {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
