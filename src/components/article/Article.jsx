import React from 'react'
import "./article.css"

const Article = ({imgUrl,date,title}) => {
  return (
    <div className='article__component'>
      <div className='article__component-img'>
        <img src={imgUrl} alt="" />
      </div>
      <div className='article__component-text'>
        <div className='article__component-text_title'>

          <p>{date}</p>
          <h4>{title}</h4>
        </div>
        <p>Read full Article</p>

      </div>
      
    </div>
  )
}
export default Article
