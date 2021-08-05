import React from "react";
import "./Launch.css";

function Launch() {
  return (
    <div className="Launch">
      <img className="icon" alt="" src="http://placehold.it/60"/>
      <div className="details">
        <h3 className="name">FalconSat</h3>
        <span className="rocket">Falcon 1 - Merlin A</span>
        <span className="date">04.06.2016 18:45</span>
      </div>
      <span className="payloads">3 payloads</span>
      <span className="status">Success</span>
    </div>
  );
}

export default Launch;
