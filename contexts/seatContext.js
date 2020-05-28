import React, { useState, createContext } from "react";

export const SeatContext = createContext();

export function SeatProvider(props) {
  const [gseats, setGseats] = useState({});
  return (
    <SeatContext.Provider value={{ gseats, setGseats }}>
      {props.children}
    </SeatContext.Provider>
  );
}
