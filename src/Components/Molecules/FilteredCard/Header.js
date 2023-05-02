import React from 'react'
import Toggle from '../CheckboxToggle/Toggle'
import './Header.scss'

export default function Header(props) {
  return (
    <div className="header col-md-8">
        <div className="text">
            {props.text}
        </div>
        <div className="title">
            {props.title}
        </div>
        <div className="button">
            <Toggle black/>
            <Toggle/>
            
        </div>
    </div>
  )
}
