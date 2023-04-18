import React from 'react'
import './Media.scss'

export default function Media(props) {
  return (
    <div className='media-component-container'>
      <div className="media">
        {props.image}
      </div>
    </div>
  )
}
