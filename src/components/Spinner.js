import React, { Component } from 'react'
import loading2 from './loading2.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className = "text-center spinner">
        <img src={loading2} alt="loading" />
      </div>
    )
  }
}

export default Spinner
