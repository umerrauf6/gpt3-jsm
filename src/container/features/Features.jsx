import React from 'react'
import "./features.css"
import { Feature } from '../../components'

const Features = () => {

  const featuresData = [
     {
      title: "Improving end distrusts instantly ",
      desc:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
     {
      title: "Become the tended active",
      desc:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
      title: "Message or am nothing",
      desc:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
      title: "Really boy law county",
      desc:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    }

  ]

  return (
    <div className='features__section section__padding'>
      <div className='features__section-container'>
        <div className='features__section-container_heading'>
          <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className='features__section-container_feature'>
          {
            featuresData.map((feature) => 
              <Feature title={feature.title} desc={feature.desc}/>
            )
            }
        </div>
      </div>
    </div>
  )
}

export default Features
