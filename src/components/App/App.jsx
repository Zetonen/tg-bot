import { useEffect, useState } from "react";
import { GlobalStyles } from "../GlobalStyles";
import { sendGuess, startGame } from "../../api";
import FormGuess from "../FormGuess/FormGuess";
import { Btn, Title, Wrap } from "./App.styled";

let tg = window.Telegram.WebApp;
tg.expand();

function App() {
  const [message, setMessage] = useState("Game started");

  const newGame = async () => {
    try {
      const res = await startGame({
        gameId: tg.initDataUnsafe.user.id,
      });
      setMessage(res.message);
    } catch (error) {
      console.log(error);
    }
  };
  
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
    <Wrap>
      <Title>{message}</Title>
      {message === "You win" ? (
        <Btn onClick={newGame}>New Game</Btn>
      ) : (
        <FormGuess onSubmit={handleSubmit} />
      )}
      <GlobalStyles />
    </Wrap>
  );
}

export default App;
