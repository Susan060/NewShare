import React from "react";

const Newsitem =(props)=>{
    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
          <span className="badge rounded-pill bg-danger" style={{}}>
            {source}
          </span>
          </div>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on Date: {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
}

export default Newsitem;
