import React from 'react'
import CardNews from './CardNews'
import PropTypes from "prop-types"

const News = ({news}) => {
    
  return (
    <div className='row'>
        {news?.map(paper => (
            <CardNews key={paper.url} paper={paper}/>
        ))}
    </div>
  )
}

News.proptypes = {
  news: PropTypes.array.isRequired
}

export default News