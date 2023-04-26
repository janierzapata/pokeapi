import { createContext } from "react";
import { useStateContainer } from "./app.state";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const contextValue = useStateContainer();
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
