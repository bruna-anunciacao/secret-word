import "./Game.css";

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, points}) => {
  return (
    <div className="game">
        <p className="points">
            <span>Pontuação: {points}</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h2 className="tipWord">Dica: <span>{pickedCategory}</span></h2>
        <p>Ainda restam {guesses} tentativa(s).</p>
        <div className="wordWrapper">
            {letters.map((letter, index) => (
                guessedLetters.includes(letter) ? (
                    <span key={index} className="letter">{letter}</span>
                ) : (
                    <span key={index} className="blankSpace"></span>
                )
            ))}
        </div>
        <div className="letterWrapper">
            <p>Tente adivinhar uma letra na palavra:</p>
            <form>
                <input type="text" maxLength="1" name="letter" required/>
                <button>Adivinhar</button>
            </form>
        </div>
        <div className="wrongLettersWrapper">
            <p>Letras já digitadas:</p>
            {wrongLetters.map((letter, index) => (
                <span key={index} className="wrongLetter">{letter}</span>
            ))}
        </div>
    </div>
  )

};

export default Game;
