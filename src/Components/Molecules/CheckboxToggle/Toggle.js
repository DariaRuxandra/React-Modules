import React, { useCallback } from "react";
import "./Toggle.scss";
import { useState } from "react";
// import { useCallback } from 'react';

export default function Toggle(props) {
  const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState((state) => !state), []);
    return [state, toggle];
  };
  const [toggle, setToggle] = useToggle();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="toggle">
        
        <div className="toggle-button-container">
        {props.black ? (
                    <button className={`btn black ${toggle ? 'active' : ''}`} onClick={setToggle}>
                    <span>By use case</span>
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.24001 1.88827C0.107456 1.75571 0.107456 1.5408 0.24001 1.40825L0.908247 0.74001C1.0408 0.607456 1.25571 0.607456 1.38827 0.74001L5.61173 4.96348C5.74429 5.09603 5.9592 5.09603 6.09175 4.96348L10.3152 0.74001C10.4478 0.607456 10.6627 0.607456 10.7952 0.74001L11.4635 1.40825C11.596 1.5408 11.596 1.75571 11.4635 1.88827L6.09175 7.25999C5.9592 7.39254 5.74429 7.39254 5.61173 7.25999L0.24001 1.88827Z"
                        fill="white"
                      />
                    </svg>
                  </button>
        ) : (
            <button className={`btn ${toggle ? 'active' : ''}`} onClick={setToggle}>
            <span>By strategy</span>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.24001 1.88827C0.107456 1.75571 0.107456 1.5408 0.24001 1.40825L0.908247 0.74001C1.0408 0.607456 1.25571 0.607456 1.38827 0.74001L5.61173 4.96348C5.74429 5.09603 5.9592 5.09603 6.09175 4.96348L10.3152 0.74001C10.4478 0.607456 10.6627 0.607456 10.7952 0.74001L11.4635 1.40825C11.596 1.5408 11.596 1.75571 11.4635 1.88827L6.09175 7.25999C5.9592 7.39254 5.74429 7.39254 5.61173 7.25999L0.24001 1.88827Z"
                fill="black"
              />
            </svg>
          </button>
        )}


      </div>

      {toggle && (
        <ul className="form">
          <li>
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Software</label>
          </li>
          <li>
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Digital goods</label>
          </li>
          <li>
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">SaaS</label>
          </li>
          <li>
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Ecommerce</label>
          </li>
        </ul>
      )}
    </div>
  );
}
