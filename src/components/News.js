import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        I am news Component
        <NewsItem/>
        <NewsItem/>
        
      </div>
    )
  }
}

export default News
