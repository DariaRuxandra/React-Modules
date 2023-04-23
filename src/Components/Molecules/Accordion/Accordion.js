import React from 'react'
import './Accordion.scss';
import { useState } from 'react';

export default function Accordion(props) {

  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className="accordion-container">
      {data.map((item, i) => (
        <div className="item">
          <div className="accordion-header" onClick ={ () => toggle(i)}>
              {props.header}
              <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "content show" : "content"} >
              {props.text}
          </div>
          </div>
      ))}
    </div>
)
}


const data = [
  {
    header: "Lorem ipsum",
    text: "Ceva text aici"
  },
  {
    header: "Dolor sit amet",
    text: "Ceva text aici2"
  },
  {
    header: "Lorem ipsum",
    text: "Ceva text aici3"
  },
  {
    header: "Laoreet vel neque  consectetur non olor sit",
    text: "Ceva text aici4"
  },
  {
    header: "Cursus pretium dolor",
    text: "Ceva text aici5"
  }
]