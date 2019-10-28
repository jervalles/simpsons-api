import React from "react";

function DisplayEmployee({ employee }) {
  return (
    <div className="DisplayEmployee">
      <img src={employee.image} alt={employee.character} />
      <h1>{employee.character}</h1>
      <p>{employee.quote}</p>
    </div>
  );
}

export default DisplayEmployee;
