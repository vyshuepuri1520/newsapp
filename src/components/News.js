import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles :[],
      loading :false
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=805dddd9d0b54ccdae554c5ec350b5b4";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h2>NewsBreak- Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key = {element.url}>
          <NewsItem  title={element.title?element.title.slice(0,30):""} description = {element.description?element.description.slice(0,90):""} imageUrl = {element.urlToImage} newsUrl = {element.url}/>
          </div>
          })}


        
        </div>
        
        
        
      </div>
    )
  }
}

export default News
