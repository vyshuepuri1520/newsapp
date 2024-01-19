import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'general',
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  
  constructor(){
    super();
    this.state = {
      articles :[],
      loading :false,
      page : 1
    }
  }
  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=805dddd9d0b54ccdae554c5ec350b5b4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading :true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading : false
    })
  }
  async componentDidMount(){
    // console.log("cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=805dddd9d0b54ccdae554c5ec350b5b4&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading :true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading : false
    // })
    this.updateNews();
  }

   handlePreviousClick=async()=>{
    // console.log("previous")
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=805dddd9d0b54ccdae554c5ec350b5b4&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading :true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    //   this.setState({
    //   page : this.state.page-1,
    //   articles:parsedData.articles,
    //   loading : false
    // })
    this.setState({page:this.state.page-1});
    this.updateNews();
  }
   handleNextClick=async()=>{
    // console.log("next")
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)))
    // {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=805dddd9d0b54ccdae554c5ec350b5b4&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading :true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    //   this.setState({
    //   page : this.state.page+1,
    //   articles:parsedData.articles,
    //   loading : false
    // })}
    this.setState({page:this.state.page+1});
    this.updateNews();
  }
  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h2 className = "text-center" style = {{margin : "35px 0px"}}>NewsBreak- Top Headlines</h2>
        {this.state.loading &&<Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
          return <div className="col-md-4" key = {element.url}>
          <NewsItem  title={element.title?element.title.slice(0,30):""} description = {element.description?element.description.slice(0,90):""} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
          </div>
          })}
        </div>
        <div className = "container d-flex justify-content-between">
        <button disabled = {this.state.page<=1}type="button" className="btn btn-info" onClick = {this.handlePreviousClick}>&larr; Previous</button>
        <button disabled = {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-info" onClick = {this.handleNextClick}>Next &rarr;</button>
        </div>
        
        
        
      </div>
    )
  }
}

export default News
