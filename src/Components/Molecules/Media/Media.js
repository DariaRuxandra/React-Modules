import React from 'react'

export default function Media(props) {
  return (
    <div className='media-component-container'>
      <div className="media">
        {props.image}
      </div>
    </div>
  )
}
