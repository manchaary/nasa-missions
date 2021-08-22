import React from "react";
import "./Launch.css";

function Launch({ data }) {
  return (
    <div className="Launch">
      <img className="icon" alt="" src={data.links.mission_patch_small}/>
      <div className="details">
        <h3 className="name">{data.mission_name}</h3>
        <span className="rocket">{data.rocket.rocket_name}</span>
        <span className="date">{new Date(data.launch_date_unix * 1000).toLocaleDateString()}</span>
      </div>
      <span className="payloads">{data.rocket.second_stage.payloads.length} payloads</span>
      <span className="status" title={data.details}>{data.launch_success ? 'Success' : 'Failed'}</span>
    </div>
  );
}

export default Launch;
