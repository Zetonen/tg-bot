import { useEffect, useState } from "react";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import { sendGuess, startGame } from "./api";

let tg = window.Telegram.WebApp;
tg.expand();
function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Start");
  console.dir(tg);
  useEffect(() => {
    tg.ready();
    const fn = async () => {
      try {
        const res = await startGame({
          gameId: tg.initDataUnsafe.user.id,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fn();
  }, []);
  useEffect(() => {
    const fn = async () => {
      try {
        const res = await sendGuess({
          guessNumber: count,
          gameId: tg.initDataUnsafe.user.id,
        });
        setMessage(res.message);
      } catch (error) {
        console.log(error);
      }
    };
    fn();
  }, [count]);
  return (
    <>
      <h1>{message}</h1>
      <div className="card">
        <button
          style={{ color: "var(--tg-theme-bg-color)" }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>

      <GlobalStyles />
    </>
  );
}

export default App;
