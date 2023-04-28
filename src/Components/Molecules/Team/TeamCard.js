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
        <div className="content-container-flipped">
          <div className="flipped-name">{props.flippedName}</div>
          <div className="flipped-description">{props.flippedDescription}</div>
          <div className="social-icons">
            {props.socialIcon}
          </div>
        </div>
      </div>
  )
}