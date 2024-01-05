import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>
        
        <div className="card" style={{width: "18rem"}}>
          <img src="https://media.newyorker.com/photos/6579d39668872af306a7c711/16:9/w_1280,c_limit/Webster-Shouts-Cricket.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
