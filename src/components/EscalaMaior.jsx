import React from "react";

export default (props) => {

    const url = 'https://fretmap.app/scale-major/root-' + props.tonica + '/hand-right'

  return (
    <div>      
      
      <iframe
        src= {url}
        width="100%"
        height="375"
      />
    </div>
  );
};
