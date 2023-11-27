import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container bg-success d-flex flex-column justify-content-center text-light">
        <h1>Welcome ❤</h1>
        <MyForm />
      </div>
    </div>
  );
}

function MyForm() {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");

  const change = (e) => {
    setInputValue(e.target.value);
  };

  const formSubmit = (e) => {
    e.prevent.default();
    setText(inputValue);
    setInputValue("");
  };
  return (
    <form onSubmit={formSubmit}>
      <input
        style={{ width: "30rem" }}
        type="text"
        id="textInput"
        className="form-control"
        value={inputValue}
        onChange={change}
        placeHolder="🖋📝"
      />
    </form>
  );
}

export default App;



