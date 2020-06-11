import React from "react";
import Jam from "./Jam";

export default () => {

  const info = {

    tonica: "g",
    src: "https://www.youtube.com/embed/rQdEfvenheQ"
  }
  return (

    <div>

      <h1 className = 'text-primary text-center'>Improvisação Am Dórico</h1>

      <Jam tonica = {info.tonica} src = {info.src}/>      
      
    </div>
  );
};
