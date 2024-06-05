import React from "react";

export const Display = ({ name }) => {
  return (
    <div className="display" style={{ display: "flex", fontSize: "3rem" }}>
      {name}
    </div>
  );
};
