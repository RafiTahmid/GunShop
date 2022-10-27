import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllGuns from "./Components/AllGuns/AllGuns";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <AllGuns></AllGuns>
    </div>
  );
}

export default App;
