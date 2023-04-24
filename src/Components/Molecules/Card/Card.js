import React from 'react'
import './Card.scss';
import ArrowIcon from '../../../images/Arrow.svg'

export default function Card(props) {
  return (
        <div className="card">
          <div className="image">
          {props.image}
          </div>
          <div className="title">
            {props.text}
          </div>
          {props.subtext1 ? (
                        <div className="subtext1">
                        {props.subtext1}
                      </div>
          ) : ''}

            {props.subtext2 ? (
              <div className="subtext2">
              {props.subtext2}
            </div>
            ) : ''}

         
          <div className="button">
            {props.button}
            <i class="fa-solid fa-arrow-right"/> 
        </div>
    </div>
  )
}
