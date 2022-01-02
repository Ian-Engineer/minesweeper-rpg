import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";
import buildBoard from "../../helper-functions/buildBoard.js";
import Rows from './Rows.jsx'
import LevelUp from "../modals/LevelUp.jsx";
import GameEnd from "../modals/GameEnd.jsx"


export const BoardContext = React.createContext();

export default function Board(props) {
  // set state variables
  const [gameBoard, setGameBoard] = useState({});
  const [rows, setRows] = useState([]);
  const [character, setCharacter] = useState(0);
  const [start, setStart] = useState([]);
  const [play, setPlay] = useState(true);
  const [height, setHeight] = useState(25);
  const [width, setWidth] = useState(50);

  const { setHealth, setLevel, setExp, health, level, exp, levelUpModal, started } = useContext(AppContext)
  
  // use effect function for rerendering
  useEffect(() => {
    // run function defining game board
    const startInfo = buildBoard(height, width, character)
    setGameBoard(startInfo.gameBoard)
    setRows(Object.keys(startInfo.gameBoard))
    setStart(startInfo.startPosition)
  }, [])

  // return the divs to be rendered
  return started ? 
    <div id="boardContainer">
      <BoardContext.Provider value = {{
        gameBoard,
        character,
        start,
        height,
        width,
        play,
        setPlay
        }}>
       <div id="board">
         {rows.map((row, index) => {
           return (
             <Rows row={row} key={index}/>
           )
         })}
       </div>
     <LevelUp />
     <GameEnd />
     </BoardContext.Provider>
    </div>
    : <div></div> 

}