import React from 'react'
import PropTypes from "prop-types"

const CardNews = ({paper}) => {
    const {urlToImage, url,title,description,source} = paper
  return (
    <div className='col s12 m6 l4' >
        <div className='card large'>
           {urlToImage ? <div className='card-image'> <img src={urlToImage} alt="imagen" /></div>: null}
            <div style={{overflowY: "scroll"}} className='card-content'>
            <h4 >{title}</h4>
            <p>{description}</p>
            </div>
            <div className='card-action'>
            <a 
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='wave-effect waves-light btn'>
                ver noticia completa
            </a>
            </div>
        </div>
    </div>
  )
}

CardNews.propTypes = {
  paper: PropTypes.object.isRequired
}

export default CardNews