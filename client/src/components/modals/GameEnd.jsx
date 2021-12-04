import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "../Modal.jsx";
import { AppContext } from "../App.jsx";

export default function GameEnd() {
  //get context from app
  const { winModal, setWinModal, gameEnd } = useContext(AppContext);

  return (
    <Modal value={gameEnd} >
      <div id="gameendmodal">
        WINNER!
      </div>
    </Modal>
  )

}