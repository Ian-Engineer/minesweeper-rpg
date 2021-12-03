import React from "react";
import axios from "axios";

export const AppContext = React.createContext();

export default function App(props) {
  // set state variables for app - likely nothing

  return (
    <AppContext.Provider >
      {props.children()}
    </AppContext.Provider>
  ) 
}