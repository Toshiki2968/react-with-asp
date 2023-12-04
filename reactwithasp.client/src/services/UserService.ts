import axios from "axios";
import User from "../interfaces/User";

const apiUrl = "";

export const registerUser = async (user: User) => {
  const response = await axios.post(apiUrl, user);
  return response.data;
};
