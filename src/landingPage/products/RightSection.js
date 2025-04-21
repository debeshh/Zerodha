import React from "react";

function RightSection({ imgURL, Name, Description, LearnMore }) {
  return (
    <div className="container mt-5 p-3">
      <div className="row">
        
        <div className="col-6">
          <h1>{Name}</h1>
          <p>{Description}</p>
          <a href={LearnMore}>
            <img src="" />
          </a>
        </div>
        <div className="col-6">
          <img src={imgURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
