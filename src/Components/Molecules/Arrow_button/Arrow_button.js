import React from "react";
import '../Arrow_button/Arrow_button.scss';

export default function Arrow_button(props) {
  return (
    <div className="arrow-button">
      {props.is_link ? (
        <a href={props.link_url}>{props.button_text}</a>
      ) : (
        <p>{props.button_text}</p>
      )}
    </div>
  );
}
