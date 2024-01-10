import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state = {
      articles :[],
      loading :false,
      page : 1
    }
  }

  async componentDidMount(){
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=805dddd9d0b54ccdae554c5ec350b5b4&page=1&pageSize = 20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults  :parsedData.totalResults})
  }

   handlePreviousClick=async()=>{
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=805dddd9d0b54ccdae554c5ec350b5b4&page=${this.state.page-1}&pageSize = 20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
      this.setState({
      page : this.state.page-1,
      articles:parsedData.articles
    })
  }
   handleNextClick=async()=>{
    console.log("next")
    if(this.state.page+1>Math.ceil(this.state.totalResults/20))
    {

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=805dddd9d0b54ccdae554c5ec350b5b4&page=${this.state.page+1}&pageSize = 20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
      this.setState({
      page : this.state.page+1,
      articles:parsedData.articles
    })}
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
        <div className = "container d-flex justify-content-between">
        <button disabled = {this.state.page<=1}type="button" className="btn btn-info" onClick = {this.handlePreviousClick}>&larr; Previous</button>
        <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/20)}type="button" className="btn btn-info" onClick = {this.handleNextClick}>Next &rarr;</button>
        </div>
        
        
        
      </div>
    )
  }
}

export default News
