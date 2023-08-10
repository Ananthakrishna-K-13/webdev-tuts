import React from "react";

const Newsitem = (props) => {
  let { title, description, imageurl, newsurl, author, publishedAt } = props;
  return (
    <div>
      <div className="card">
        <img src={imageurl} className="card-img-top" alt="[Not available]" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Article by {author}, Published on{" "}
              {new Date(publishedAt).toGMTString()}
            </small>
          </p>
          <a
            href={newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn-sm btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
