import React from "react";
import Jam from "./Jam";

export default () => {

  const info = {

    url: "https://fretmap.app/scale-harmonic-minor/root-c/hand-right",
    src: "https://www.youtube.com/embed/m5oHAG9044s"
  }
  return (

    <div>

      <h1 className = 'text-primary text-center'>Improvisação II V I - Cm</h1>

      <Jam url = {info.url} src = {info.src}/>      
      
    </div>
  );
};
