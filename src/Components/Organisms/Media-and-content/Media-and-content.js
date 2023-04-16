import React from "react";
import './Media-and-content.scss'
export default function Media_and_content(props) {
  return (
    <section className="media-and-content">
      <div className="container">
        {props.reverse ? (
          <div className="row flex-row-reverse">
            <div className="col-12 col-md-6">
                {props.media}
            </div>
            <div className="col-12 col-md-6">{props.content}</div>
          </div>
        ) : (
          <div className="row">
            <div className="col-12 col-md-6">{props.media}</div>
            <div className="col-12 col-md-6">{props.content}</div>
          </div>
        )}
      </div>
    </section>
  );
}
