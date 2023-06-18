import React from 'react'
import "./feature.css"


const Feature = ({title,desc}) => {
  return (
    <div className='feature__section'>
      <div className='feature__section-container'>
        <div className='feature__section-container_title'>
          
          <div/>
          <h1>{title}</h1>
        </div>
        <div className='feature__section-container_desc'>

        <p>{desc }</p>
        </div>
      </div>
      
    </div>
  )
}

export default Feature
