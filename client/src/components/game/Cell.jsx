import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";
import buildBoard from "../../helper-functions/buildBoard.js";
import { BoardContext } from './Board.jsx'
import connectedEmpties from "../../helper-functions/connectedEmpties.js";

export default function Cell(props) {
  // set state variables
  const [content, setContent] = useState('');
  const [display, setDisplay] = useState(false);

  // grab context from the board
  const { gameBoard, start, character, height, width } = useContext(BoardContext)

  // use effect function for rerendering
  // return the divs to be rendered

  
  useEffect(() => {
    // if (cellClass === 'shownCells') {
    if (display) {
      setContent(gameBoard[props.row][props.col])
    }
    // determine if this is the starting position
    if (Number(props.row) === start[0] && Number(props.col) === start[1]) {
      if (!display) {
        clickOnCell()
      }
    }
  }, [display])

  var style = {};
  var cellClass = '';

  if (typeof(gameBoard[props.row][props.col]) === 'number' && display) {
    style = {color: 'darkred', backgroundColor: 'darksalmon'} 
  } else if (gameBoard[props.row][props.col] === '0') {
    style = {color: 'transparent'}
  } else if (!display && typeof(content) === 'number') {
    style = {color: 'darkgreen', backgroundColor: 'palegreen'}
  } else {
    style = {color: 'black'};
  }

  display ? 
    style = {...style, bordercolor: "black"} :
    style = {...style, bordercolor: "transparent"}

  function clickOnCell() {
    if (cellClass !== 'shownCells') {
      // if this is an empty cell
      if (gameBoard[props.row][props.col] === '0') {
        // iterate through adjacent rows
        for (var i = -1; i <= 1; i ++) {
          for (var j = -1; j <= 1; j ++) {
            if (Number(props.row) + i > 0 && Number(props.row) + i <= height && Number(props.col) + j > 0 && Number(props.col) +j <= width) {
              document.getElementById(`row${Number(props.row) + i}col${Number(props.col) + j}`).click()
            }
          }
        }
      } else if (gameBoard[props.row][props.col] === '1') {
        alert('YOU WON')
      }
      document.getElementById(`row${Number(props.row)}col${Number(props.col)}`).classList.add('shownCells')
      cellClass="shownCells";
      setDisplay(true);
    }
  }

  function rightClickOnCell(e) {
    if (!display) {
      e.preventDefault()
      if(content === '') {
        setContent(1)
      } else if (content === 9) {
        setContent('')
      } else {
        setContent(content + 1)
      }
    }
  }

  return (
    <div className="cells" style={style} onClick={clickOnCell} onContextMenu={rightClickOnCell}>
      <div className={cellClass} style={style} id={`row${props.row}col${props.col}`}>
      {content}
      </div>
    </div>
  )

}