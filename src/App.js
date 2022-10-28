import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllGuns from "./Components/AllGuns/AllGuns";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Navbar count={count}></Navbar>
      <AllGuns countIncrease={countIncrease}></AllGuns>
    </div>
  );
}

export default App;
