import React from "react";
import Launch from "./Launch";
import "./Launches.css";

function Launches({ data }) {
  return (
    <div className="Launches">
      {data.map(launch => <Launch key={launch.mission_name} data={launch} />)}
    </div>
  );
}

export default Launches;
