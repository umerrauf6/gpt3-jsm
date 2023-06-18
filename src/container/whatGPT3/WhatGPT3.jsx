import React from 'react'
import "./whatGPT3.css"
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='whatgpt__section section__margin' id='WhatisGpt'>
      <div className='whatgpt__section-description'>
        <Feature title={"What is GPT-3"} desc={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." } />
      </div>
      <div className='whatgpt__section-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='whatgpt__section-container'>
        <Feature title={"Chatbots" } desc={ "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"} />
        <Feature title={"Knowledgebase" } desc={ "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
        <Feature title={"Education" } desc={ "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}/>

      </div>
    </div>
  )
}

export default WhatGPT3
