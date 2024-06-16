import React, { useState } from "react";
function Create() {
  const [value, setValue] = useState("");

  const changeInput = (value) => {
    setValue(value);
  };

  const addTodo = () => {
    console.log(value);
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => changeInput(e.target.value)}
      />
      <button className="btn btn-primary" onClick={() => addTodo()}>
        Add
      </button>
    </>
  );
}
export default Create;
