import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
        <p className="points">
            <span>Pontuação: 000</span>
        </p>
        <h1>Adivinhe a palavra:</h1>
        <h2 className="tipWord">Dica: <span>Dica....</span></h2>
        <div className="wordWrapper">
            <span className="letter">A</span>
            <span className="blankSpace"></span>
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
            <span className="wrongLetter">A</span>
        </div>
    </div>
  )

};

export default Game;
