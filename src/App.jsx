import { useEffect, useState } from "react";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import { sendGuess, startGame } from "./api";
import FormGuess from "./components/FormGuess/FormGuess";

let tg = window.Telegram.WebApp;
tg.expand();

const newGame = async () => {
  try {
    const res = await startGame({
      gameId: tg.initDataUnsafe.user.id,
    });
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [message, setMessage] = useState("Start");

  const handleSubmit = async (guessNumber) => {
    const res = await sendGuess({
      guessNumber: guessNumber,
      gameId: tg.initDataUnsafe.user.id,
    });
    setMessage(res.message);
  };

  useEffect(() => {
    tg.ready();
    newGame();
  }, []);
  return (
    <>
      <h1>{message}</h1>
      {message === "You win" ? (
        <button onClick={newGame}>New Game</button>
      ) : (
        <FormGuess onSubmit={handleSubmit} />
      )}
      <GlobalStyles />
    </>
  );
}

export default App;
