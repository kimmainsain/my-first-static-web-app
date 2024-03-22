import React from "react";
import { useState} from "react";
// scss
import "./AppLayout.scss";

function App() {
  const [count, setCount] = useState(0);

  const value = "value value";
  const value2 = "value2 value2";
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

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
    </div>
  );
}

export default App;
