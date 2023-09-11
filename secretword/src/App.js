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

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];
    return { word, category };
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates()
    const { word, category } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    setPickedWord(wordLetters);
    setPickedCategory(category);
    setLetters(wordLetters);

    setStage(stages[1].name);
  }, [pickWordAndCategory]);

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters([...guessedLetters, normalizedLetter]);
    } else {
      setWrongLetters([...wrongLetters, normalizedLetter]);
      setGuesses(guesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (guesses === 0) {
      clearLetterStates();
      setStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    if (guessedLetters.length === uniqueLetters.length) {
      setPoints((prevPoints) => prevPoints + 50);
      startGame()
    }
  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setGuesses(4);
    setPoints(0);
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
      {stage === "end" && <GameOver retry={retry} points={points} />}
    </div>
  );
}

export default App;
