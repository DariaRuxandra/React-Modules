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
              {item.header}
              <span>{selected === i ? "-" : "+"}</span>
          </div>
          <div className={selected === i ? "content show" : "content"} >
              {item.text}
          </div>
        </div>
      ))}
    </div>
)
}


const data = [
  {
    header: "Lorem ipsum",
    text: "Mauris lacinia ante fringilla, porttitor tellus vitae, lorem ipsum dolor ipsum ante lorem laoreet. Laoreet vel neqe non, cursus pretium lorem ipsum dolor sit amet consect. Mauris lacinia ante fringilla, tellus vitae."
  },
  {
    header: "Dolor sit amet consectetur",
    text: "Mauris lacinia ante fringilla, porttitor tellus vitae, lorem ipsum dolor ipsum ante lorem laoreet. Laoreet vel neqe non, cursus pretium lorem ipsum dolor sit amet consect. Mauris lacinia ante fringilla, tellus vitae."
  },
  {
    header: "Laoreet vel neque  consectetur non olor sit",
    text: "Mauris lacinia ante fringilla, porttitor tellus vitae, lorem ipsum dolor ipsum ante lorem laoreet. Laoreet vel neqe non, cursus pretium lorem ipsum dolor sit amet consect. Mauris lacinia ante fringilla, tellus vitae."
  },
  {
    header: "Cursus pretium dolor",
    text: "Mauris lacinia ante fringilla, porttitor tellus vitae, lorem ipsum dolor ipsum ante lorem laoreet. Laoreet vel neqe non, cursus pretium lorem ipsum dolor sit amet consect. Mauris lacinia ante fringilla, tellus vitae."
  }
]