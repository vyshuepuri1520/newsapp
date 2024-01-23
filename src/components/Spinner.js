import React from 'react'
import loading2 from './loading2.gif'

const Spinner =()=> {
    return (
      <div className = "text-center spinner">
        <img src={loading2} alt="loading" />
      </div>
    )
 
}

export default Spinner
