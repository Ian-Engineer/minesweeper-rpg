import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";

export const PlayerContext = React.createContext()

export default function Player(props) {
  // set state variables

  const { setHealth, setLevel, setExp, health, level, exp, levelsExp } = useContext(AppContext)

  // use effect
  useEffect(() => {

  }, [exp, level, health])


  // return
  return (
    <div id="playerInfo">
      <div id="health">
        {`Health: ${health}`}
      </div>
      <div id="level">
        {`Level: ${level}`}
      </div>
      <div>
        {`Experience: ${exp}/${levelsExp[level] + 1}`}
      </div>
    </div>
  )
}