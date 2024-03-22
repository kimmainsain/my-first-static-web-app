import React from "react";
import { useState, useEffect } from "react";
// scss
import "./AppLayout.scss";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  const value = "value value";
  const value2 = "value2 value2";
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  // const getData = async () => {
  //   const response = await axios.get(``);
  //   const data = await response.json();
  //   setData(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <header>
        <div className="header-title">간단한 SCSS 적용 테스트</div>
      </header>
      <h2>{value}</h2>
      <h2>{value2}</h2>
      <h2>{count}</h2>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <h2>HTTP Data : {data}</h2>
    </div>
  );
}

export default App;
