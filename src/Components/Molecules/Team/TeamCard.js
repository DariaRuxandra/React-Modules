import React from 'react'
import './TeamCard.scss'

export default function TeamCard(props) {
  return (
    <div className="team-card">
        <div class="content-container">
          <div className="position">
              {props.position}
          </div>
          <div className="image">
              {props.image}
          </div>
          <div className="name">
              {props.name}
          </div>
        </div>
      </div>
  )
}
