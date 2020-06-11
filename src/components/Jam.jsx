import React from "react";
import EscalaMaior from "./EscalaMaior";
import Backing from "./Backing";


export default (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <EscalaMaior tonica={props.tonica} />
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
