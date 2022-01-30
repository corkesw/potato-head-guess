import { useState } from "react";
import "./App.css";
import Guess from "./components/Guess";
import Header from "./components/Header";
import Scorecard from "./components/Scorecard";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header></Header>
      <Scorecard score={score}></Scorecard>
      <Guess score={score} setScore={setScore}></Guess>
    </div>
  );
}

export default App;
