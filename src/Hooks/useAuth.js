import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
