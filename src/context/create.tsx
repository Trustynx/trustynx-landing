// "use client";

import { useState, createContext } from "react";

// type BlueProp = {
//   color: string;
//   changeColor?: () => void;
// };

export const TurnBlue = createContext();

export const BlueProvider = () => {
  const [blue, setBlue] = useState("");

  return <TurnBlue.Provider value={{ blue, setBlue }}></TurnBlue.Provider>;
};
