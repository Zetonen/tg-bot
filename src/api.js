import axios from "axios";

axios.defaults.baseURL = "https://dea3-176-37-162-35.ngrok-free.app";

export const sendGuess = async (guess, info) => {
  const response = await axios.post("/guess", { guess, info });
  return response.data;
};
