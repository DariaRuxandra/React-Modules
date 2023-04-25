import React from 'react'
import './FilteredCard.scss'

export default function FilteredCard(props) {
  return (
    <div className="filteredCard">
        <div className="image">
            {props.image}
        </div>
        <div className="field">
            {props.field}
        </div>
        <div className="text">
            {props.text}
        </div>
    </div>
  )
}
