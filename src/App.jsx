import { useEffect, useState } from "react";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import { sendGuess } from "./api";

let tg = window.Telegram.WebApp;
tg.expand();
function App() {
  const [count, setCount] = useState(0);

  console.dir(tg);
  useEffect(() => {
    tg.ready();
  }, []);
  useEffect(() => {
    const fn = async () => {
      const res = await sendGuess(count, tg.initDataUnsafe );
    };
    fn();
  }, [count]);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          style={{ color: "var(--tg-theme-bg-color)" }}
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <GlobalStyles />
    </>
  );
}

export default App;
