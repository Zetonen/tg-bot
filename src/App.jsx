import { useEffect, useState } from "react";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import { sendGuess, startGame } from "./api";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const guessNumber = e.target.guessNumber.value;
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
        <form onSubmit={handleSubmit}>
          <input name="guessNumber" type="number" placeholder="Enter number" />
          <button type="submit">Submit</button>
        </form>
      )}

      <GlobalStyles />
    </>
  );
}

export default App;
