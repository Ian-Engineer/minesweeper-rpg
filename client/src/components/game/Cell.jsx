import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";
import buildBoard from "../../helper-functions/buildBoard.js";
import { BoardContext } from './Board.jsx'

export default function Cell(props) {
  // set state variables
  const [display, setDisplay] = useState(false);
  const [content, setContent] = useState('');

  // grab context from the board
  const { gameBoard } = useContext(BoardContext)

  // use effect function for rerendering
  // return the divs to be rendered

  useEffect(() => {
    if (display) {
      setContent(gameBoard[props.row][props.col])
    }
  }, [display])

  var style = {};
  typeof(gameBoard[props.row][props.col]) === 'number' ? style = {color: 'red'} : {color: 'black'};
  display ? style = {...style, bordercolor: "black"} : style = {...style, bordercolor: "transparent"}

  return (
    <div className="cells" style={style} onClick={() => {setDisplay(true)}}>
      {content}
    </div>
  )

}