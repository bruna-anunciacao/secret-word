import "./GameOver.css";

const GameOver = ({retry, points}) => {
  return (
    <div className="endGameWrapper">
        <h1>FIM DE JOGO</h1>
        <h2>Pontuação final: <span>{points}</span></h2>
        <button onClick={retry}>Jogar novamente</button>
    </div>
  )
};

export default GameOver;
