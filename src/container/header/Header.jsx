import React from 'react'
import "./header.css"
import people from "../../assets/people.png"
import aiHeader from "../../assets/ai.png"
const Header = () => {
  return (
    <div className='header__section section__padding' id='Home'>
      <div className='header__section-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className='header__section-content__input'>
          <input type="text" placeholder='Your Email Address'/>
          <button>Get Started</button>
        </div>
        <div className='header__section-content__people'>
          <img src={people} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='header__section-img'>
        <img className='' src={aiHeader} alt="Ai Header" />
      </div>
      
    </div>
  )
}

export default Header
