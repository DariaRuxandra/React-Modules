import React from 'react'
import './Card.scss';

export default function Card(props) {
  return (
    <>
        <div className="card">
          <div className="image">
          {props.image}
          </div>
          <div class="title">
            {props.text}
          </div>
          {props.subtext1 ? (
                        <div>
                        {props.subtext1}
                      </div>
          ) : ''}

            {props.subtext2 ? (
              <div>
              {props.subtext2}
            </div>
            ) : ''}
            
        </div>
    </>
  )
}