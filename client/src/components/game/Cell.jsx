import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";
import buildBoard from "../../helper-functions/buildBoard.js";
import { BoardContext } from './Board.jsx'
import connectedEmpties from "../../helper-functions/connectedEmpties.js";
import fight from "../../helper-functions/fight.js";

export default function Cell(props) {
  // grab context from the board and player stats
  const { gameBoard, start, character, height, width, play, setPlay } = useContext(BoardContext)
  const { setHealth, setLevel, setExp, health, level, exp, levelsExp, setLevelUpModal, setWinModal, setLossModal, levelUpModal, setGameEnd, started, setStarted } = useContext(AppContext)

  // set state variables
  const [content, setContent] = useState('');
  const [display, setDisplay] = useState(false);
  const [cellValue, setCellValue] = useState(gameBoard[props.row][props.col])


  // use effect function for rerendering
  // return the divs to be rendered

  
  useEffect(() => {
    // if (cellClass === 'shownCells') {
    if (display) {
      setContent(cellValue)
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

  if (typeof(cellValue) === 'number' && display) {
    style = {color: 'darkred', backgroundColor: 'darksalmon'} 
  } else if (cellValue === '0') {
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
    if (play) {
      // if game has not started yet
      // if (started === false) {
      //   // start the timer
      //   setStarted(true)
      // }
      if (!display) {
      if (cellClass !== 'shownCells') {
        cellClass="shownCells";
        setDisplay(true);
        // if this is an empty cell
        if (cellValue === '0') {
          // iterate through adjacent rows
          for (var i = -1; i <= 1; i ++) {
            for (var j = -1; j <= 1; j ++) {
              if (Number(props.row) + i > 0 && Number(props.row) + i <= height && Number(props.col) + j > 0 && Number(props.col) +j <= width) {
                document.getElementById(`row${Number(props.row) + i}col${Number(props.col) + j}`).click()
              }
            }
          }
        } else if (typeof(cellValue) === 'number') { // means a monster was clicked on
          //invoke fight with monster level and player level
          var outcome = fight(cellValue, { level, health })
          setHealth(outcome.health)
          if (outcome.health === 0) {
            setPlay(false);
            setGameEnd(true);
            setLossModal(true);
          } else if ( cellValue === 9 ) {
            setPlay(false)
            setGameEnd(true)
            setWinModal(true)
          }
          setExp(exp + outcome.exp)
          if (exp + outcome.exp > levelsExp[level]) {
            setLevel(level + 1);
            setLevelUpModal(!levelUpModal)
            setTimeout(()=>{setLevelUpModal(false)}, 3000)
          }
        }
  
        // add the class to the element so it is shown
        document.getElementById(`row${Number(props.row)}col${Number(props.col)}`).classList.add("shownCells")
      }
    }
    }
  }

  function rightClickOnCell(e) {
    e.preventDefault()
    if (play) {
      if (!display) {
        if(content === '') {
          setContent(1)
        } else if (content === 9) {
          setContent('')
        } else {
          setContent(content + 1)
        }
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