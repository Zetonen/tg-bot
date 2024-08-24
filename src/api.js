import axios from "axios";

// console.log(import.meta.env.VITE_API_URL);
axios.defaults.baseURL =
  "https://562e-46-164-129-202.ngrok-free.app";

export const sendGuess = async (data) => {
  const response = await axios.post("/guess", data);
  return response.data;
};
export const startGame = async (data) => {
  const response = await axios.post("/start_game", data);
  return response.data;
};
