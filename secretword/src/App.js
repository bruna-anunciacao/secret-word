import "./App.css";
import StartScreen from "./components/StartScreen/StartScreen";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

import { useCallback, useEffect, useState } from "react";
import { wordsList } from "./data/word";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [stage, setStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  return (
    <div className="App">
      {stage === "start" && <StartScreen />}
      {stage === "game" && <Game />}
      {stage === "end" && <GameOver />}
    </div>
  );
}

export default App;
