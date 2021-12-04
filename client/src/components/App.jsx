import React, { useEffect, useState } from "react";
import axios from "axios";

export const AppContext = React.createContext();

export default function App(props) {
  // set state variables for app - likely nothing
  const [health, setHealth] = useState(30);
  const [level, setLevel] = useState(1);
  const [exp, setExp] = useState(0);
  const [levelsExp, setLevelsExp] = useState({
    1: 9,
    2: 89,
    3: 201,
    4: 399,
    5: 1071,
    6: 1839,
    7: 2991,
    8: 4655,
  })
  const [levelUpModal, setLevelUpModal] = useState(false)
  const [lossModal, setLossModal] = useState(false)
  const [winModal, setWinModal] = useState(false)
  const [gameEnd, setGameEnd] = useState(true)

  useEffect(() => {

  }, [exp, level, health])

  return (
    <AppContext.Provider value= {{
      health,
      setHealth,
      level,
      setLevel,
      exp,
      setExp,
      levelsExp,
      setLevelUpModal,
      setLossModal,
      setWinModal,
      levelUpModal,
      winModal,
      lossModal,
      gameEnd,
      setGameEnd
    }}>
      {props.children()}
    </AppContext.Provider>
  ) 
}