import React from 'react'
import "./possibility.css"
import possibility from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div id='openai' className='possibility__section section__padding'>
      <div className='possibility__section-container'>
        <div className='possibility__section-container_img'>
          <img src={possibility} alt="" />
        </div>
        <div className='possibility__section-container_text'>
          <p>Request Early Access to Get Started</p>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p>Request Early Access to Get Started</p>
        </div>
        
      </div>
    </div>
  )
}

export default Possibility
