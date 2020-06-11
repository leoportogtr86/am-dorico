import React from "react";
import Escala from "./Escala";
import Backing from "./Backing";


export default (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Escala url = {props.url} />
          </div>
        </div>



        <div className="row">
          <div className="col">
            <Backing src={props.src} />
          </div>          
        </div>
      </div>
    </div>
  );
};
