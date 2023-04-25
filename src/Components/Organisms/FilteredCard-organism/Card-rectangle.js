import React from 'react'
import './Card-rectangle.scss'

export default function Card_rectangle(props) {
  return (
    <div className="card-rectangle col-md-8" >
        <div className="content">
            <div className="text">
                {props.text}
            </div>
            <a href="#" className="link">Meer informatie</a>
        </div>
    </div>
  )
}
