import React from 'react'


export default function Content(props) {
  return (
    <div className='content-container'>
        <div className="quote">{props.quote}</div>
        <div className="name">{props.name}</div>
        <div className="function">{props.function}</div>
        <div className="button">{props.button}</div>
    </div>
  )
}

