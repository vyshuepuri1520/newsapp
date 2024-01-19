import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-3">       
        <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left  : '90%' ,zIndex: '1' }}>{source}  </span>          <img src={imageUrl?imageUrl:"https://images.seattletimes.com/wp-content/uploads/2024/01/01092024_tzr_tzr_202530.jpg?d=1200x630"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            <p className="card-text"><small className="text-danger">By {author?author:"Unknown"} on {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-info">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
