import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "../Modal.jsx";
import { AppContext } from "../App.jsx";

export default function GameEnd() {
  //get context from app
  const { winModal, setWinModal, loseModal, setLoseModal, gameEnd, setGameEnd, time, health, level } = useContext(AppContext);

  const [username, setUsername] = useState('');

  function saveResults() {
    const post = {
      name: username,
      time: time,
      health: health,
      level: level
    }
    axios
    .post('/scores', post)
    .then(()=>{
      setGameEnd(false);
    })
  }

  return (
    <Modal value={gameEnd} >
      <div id="gameendmodal">
        {winModal ? 'WINNER!' : 'Better luck next time'}
        <div id="recordData">
          {`Record your results: `} 
          <input type='text' placeholder="Name:" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
        </div>
          <button type='button' onClick={saveResults}>Save</button>
      </div>
    </Modal>
  )

}