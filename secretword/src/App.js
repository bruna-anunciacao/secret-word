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
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(4);
  const [points, setPoints] = useState(0);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  };

  const startGame = () => {
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    setPickedWord(wordLetters);
    setPickedCategory(category);
    setLetters(wordLetters);

    setStage(stages[1].name);
  };

  const verifyLetter = (letter) => {
    console.log(letter);
  };

  const retry = () => {
    setStage(stages[0].name);
  };
  return (
    <div className="App">
      {stage === "start" && <StartScreen startGame={startGame} />}
      {stage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          points={points}
        />
      )}
      {stage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
