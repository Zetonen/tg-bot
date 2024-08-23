import { useEffect, useState } from "react";
import { GlobalStyles } from "../GlobalStyles";
import { sendGuess, startGame } from "../../api";
import FormGuess from "../FormGuess/FormGuess";
import { Btn, Title, Wrap } from "./App.styled";
import { Loader } from "../Loader/Loader";

let tg = window.Telegram.WebApp;
tg.expand();

function App() {
  const [message, setMessage] = useState("Game started");
  const [loading, setLoading] = useState(false);
  const newGame = async () => {
    try {
      setLoading(true);
      const res = await startGame({
        gameId: tg.initDataUnsafe.user.id,
      });
      setMessage(res.message);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (guessNumber) => {
    try {
      setLoading(true);
      const res = await sendGuess({
        guessNumber: guessNumber,
        gameId: tg.initDataUnsafe.user.id,
      });
      setMessage(res.message);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    tg.ready();
    newGame();
  }, []);
  return (
    <Wrap>
      <Title>{message}</Title>
      {message === "You win" ? (
        <Btn onClick={newGame}>New Game {loading && <Loader />}</Btn>
      ) : (
        <FormGuess onSubmit={handleSubmit} loading={loading} />
      )}
      <GlobalStyles />
    </Wrap>
  );
}

export default App;
