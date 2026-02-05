import axios from "axios";

const instance = axios.create({
  baseURL: 'https://the-book-haven-server-two.vercel.app'
  // baseURL: "http://localhost:3000",
});

export const useAxiosSecure = () => {
  return instance;
};
