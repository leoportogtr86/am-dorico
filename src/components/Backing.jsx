import React from "react";

export default (props) => {

  const estilo = {

    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
  return (
    <div>
      <iframe

        style = {estilo}
        width="400"
        height="215"
        src= {props.src}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
