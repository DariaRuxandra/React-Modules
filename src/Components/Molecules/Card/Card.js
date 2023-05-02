import React from "react";
import "./Card.scss";
import ArrowIcon from "../../../images/Arrow.svg";
import Arrow_button from "../Arrow_button/Arrow_button";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image">{props.image}</div>
      <div className="title">{props.text}</div>
      {props.subtext1 ? <div className="subtext1">{props.subtext1}</div> : ""}

      {props.subtext2 ? <div className="subtext2">{props.subtext2}</div> : ""}

      <div className="button">
        {props.button}
        {/* <i class="fa-solid fa-arrow-right"/>  */}
      </div>

      {props.divider ? <div className="divider"></div> : ""}

      <div className="extra-buttons">{props.extra_buttons}</div>
    </div>
  );
}
