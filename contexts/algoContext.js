import React, { useState, createContext } from "react";

export const AlgoContext = createContext();

export function AlgoProvider(props) {
  const [algo, setAlgo] = useState([]);
  return (
    <AlgoContext.Provider value={{ algo, setAlgo }}>
      {props.children}
    </AlgoContext.Provider>
  );
}
