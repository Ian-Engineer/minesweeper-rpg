import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Modal from "../Modal.jsx";
import { AppContext } from "../App.jsx";

export default function LevelUp() {
//get context from app
const { levelUpModal, setLevelUpModal } = useContext(AppContext);

return (
  <Modal value={levelUpModal} >
    <div id="levelupmodal">
      LEVEL UP
    </div>
  </Modal>
)

}