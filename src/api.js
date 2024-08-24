import axios from "axios";

axios.defaults.baseURL = "https://c294-2a02-2378-130c-bb45-4806-44ce-ac7e-316.ngrok-free.app";

export const sendGuess = async (data) => {
  const response = await axios.post("/guess", data);
  return response.data;
};
export const startGame = async (data) => {
  const response = await axios.post("/start_game", data);
  return response.data;
};
