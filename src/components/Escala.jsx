import React from "react";

export default (props) => {

    const url = props.url

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
