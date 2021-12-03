import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";
import buildBoard from "../../helper-functions/buildBoard.js";
import Rows from './Rows.jsx'

export const BoardContext = React.createContext();

export default function Board(props) {
  // set state variables
  const [gameBoard, setGameBoard] = useState({});
  const [rows, setRows] = useState([]);
  const [character, setCharacter] = useState('fighter');
  const [rogueStart, setRogueStart] = useState([]);
  const [normalStart, setNormalStart] = useState([]);
  const [play, setPlay] = useState(false);
  
  // use effect function for rerendering
  useEffect(() => {
    // run function defining game board
    const startInfo = buildBoard()
    setGameBoard(startInfo.gameBoard)
    setRows(Object.keys(startInfo.gameBoard))
  }, [])

  // return the divs to be rendered
  return (
    <div id="boardContainer">
    <BoardContext.Provider value = {{
       gameBoard,
       character,
       rogueStart,
       normalStart
       }}>
      <div id="board">
        {rows.map((row, index) => {
          return (
            <Rows row={row} key={index}/>
          )
        })}
      </div>
    </BoardContext.Provider>
    </div>
  )

}