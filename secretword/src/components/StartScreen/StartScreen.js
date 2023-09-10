import "./StartScreen.css"

const StartScreen = ({startGame}) => {
    return (
        <div className = "startWrapper">
            <h1>Secret Word</h1>
            <p>Clique no botão para começar o jogo</p>
            <button onClick={startGame}>Iniciar o jogo</button>
        </div>
    )
}

export default StartScreen