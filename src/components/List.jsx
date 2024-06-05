import React from "react";

export const List = ({ listProp }) => {
  return (
    <div className="list">
      <ul>
        {listProp.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
