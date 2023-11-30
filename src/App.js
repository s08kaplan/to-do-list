import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div
        style={{ height: "100vh" }}
        className="container bg-success d-flex flex-column justify-content-center align-items-center text-light"
      >
        <h1>Welcome ❤</h1>
        <h2 style={{ color: "blueviolet" }}>Happy {new Date().toLocaleString('en-US', { weekday: 'long' })} 🙋‍♂️🙋‍♀️👋</h2>

        <MyForm />
      </div>
    </div>
  );
}

function MyForm() {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState([]);
  const [inputError,setInputError] = useState("")

  const change = (e) => {
    setInputValue(e.target.value);
    setInputError("")
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim()===""){
      setInputError("if you don't wanna do anything why are you here???")
      return
    }
    setText((currentText) => [
      ...currentText,
      { id: new Date().getTime(), value: inputValue }
    ]);
    setInputValue("");
  };

  const deleteItem = (id) => {
    setText((currentText) => currentText.filter((item) => item.id !== id));
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <input
          style={{ width: "30rem" }}
          type="text"
          id="textInput"
          className="form-control"
          value={inputValue}
          onChange={change}
          placeholder="🖋📝"
        />
        <button style={{ margin: "10px" }} className="btn btn-warning w-25">
          ADD
        </button>
        {inputError && <div className="invalid-feedback">{inputError}</div>}
      </form>

      <ul className="list">
        {text.map((item) => (
          <li key={item.id} style={{ listStyleType: "none", fontSize: "2rem", margin: "1rem" }}>
            <label>
              <input type="checkbox" />
              {item.value}
            </label>
            <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

