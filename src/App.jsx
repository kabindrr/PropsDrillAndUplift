import { useState } from "react";

import "./App.css";
import { FirstChild } from "./childs/FirstChild";
import { SecondChild } from "./childs/SecondChild";
import { UserForm } from "./components/UserForm";
import { Display } from "./components/Display";
import { List } from "./components/List";

const App = () => {
  const [list, setList] = useState([]);

  const addUser = (name) => {
    setList([...list, name]);
  };
  return (
    <>
      <div
        className="wrapper "
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UserForm addUser={addUser} />

        <List listProp={list} />
      </div>
    </>
  );
};

export default App;
