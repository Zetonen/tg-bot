import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const sendGuess = async (guess, info) => {
  const response = await axios.post("/guess", { guess, info });
  return response.data;
};
