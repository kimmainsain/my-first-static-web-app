import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// scss
import "./AppLayout.scss";

function App() {
  const [count, setCount] = useState(0);
  const [testValue, setTestValue] = useState("testValue");

  const value = "value value";
  const value2 = "value2 value2";
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  const getHelloWorld = async () => {
    try {
      const response = await axios.get(
        "https://metlife-team03-webapp.azurewebsites.net/api/helloworld",
      );
      setTestValue(response);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHelloWorld();
  }, []);

  return (
    <div>
      <header>
        <div className="header-title">SCSS test</div>
      </header>
      <h2>{value}</h2>
      <h2>{value2}</h2>
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <h2>Response : {testValue.data}</h2>
    </div>
  );
}

export default App;
