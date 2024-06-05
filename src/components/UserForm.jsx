import React, { useState } from "react";
import { Display } from "./Display";

export const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(name);
  };

  return (
    <div className="form">
      <Display name={name} />

      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} />
        <button className="btn btn-primary m-2">Add User</button>
      </form>
    </div>
  );
};
