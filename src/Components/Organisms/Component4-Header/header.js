import React from 'react'
import './header.scss'
import Toggle from '../../Molecules/CheckboxToggle/toggle'

export default function header() {
  return (
    <div className="header">
        <p>Client cases</p>
        <h1>The platform behind millions of businesses lorem ipsum sectetur</h1>
        <Toggle/>
    </div>
  )
}
