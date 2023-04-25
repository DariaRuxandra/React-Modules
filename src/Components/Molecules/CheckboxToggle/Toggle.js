import React, { useCallback } from 'react'
import './Toggle.scss'
import { useState } from 'react';
// import { useCallback } from 'react';

export default function Toggle() {

    const useToggle = (initialState = false) => {
        const [state, setState] = useState(initialState)
        const toggle = useCallback(() => setState((state) => !state), []);
        return [state, toggle];

    }
    const [toggle, setToggle] = useToggle()

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };

  return (
    <div className="toggle">
        <button className="btn" 
        onClick = {setToggle}
        
        
        >By use case</button>

        {toggle && ( 
        <ul className="form">
        <li>
            <input type="checkbox" id="checkbox1"/>
            <label for="checkbox1">Software</label>
        </li>
        <li>
            <input type="checkbox" id="checkbox2"/>
            <label for="checkbox2">Digital goods</label>
        </li>
        <li>
            <input type="checkbox" id="checkbox3"/>
            <label for="checkbox3">SaaS</label>
        </li>
        <li>
            <input type="checkbox" id="checkbox3"/>
            <label for="checkbox3">Ecommerce</label>
        </li>
        </ul>
        )}
    </div>
      
  );
}


