import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";
import buildBoard from "../../helper-functions/buildBoard.js";
import Cell from './Cell.jsx'
import { BoardContext } from './Board.jsx'

export default function Rows(props) {
  // set state variables

  // import game board
  const { gameBoard } = useContext(BoardContext)

  var cols = Object.keys(gameBoard[props.row])
  // use effect function for rerendering

  // return the divs to be rendered
  return (
    <div className='row'>
      {cols.map((cell, index) => {
        return (
          <Cell row={props.row} col={cell} key={index}/>
        )
      })}
    </div>
  )

}