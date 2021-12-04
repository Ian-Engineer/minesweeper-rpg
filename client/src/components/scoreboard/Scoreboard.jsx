import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";

export const ScoreboardContext = React.createContext()

export default function Scoreboard(props) {
  //set state variables
  const [scores, setScores] = useState([])

  const { gameEnd } = useContext(AppContext);

  function fetchData() {
    axios
    .get('scores')
    .then((data)=>{
      setScores(data.data)
    })
  }

  //use effect
  useEffect(() => {
    fetchData()
  }, [gameEnd])

  //return
  return (
    <div id="scoreboard-container">
      <h1>Rules:</h1>
      <ul>
        <li>
          You have a limited amount of health. Mines have different levels, and do damage based on their level relative to your own.
        </li>
        <li>
          After being revealed, mines are highlighted red and shows it's level.
        </li>
        <li>
          Right click to mark tiles with presumed levels.
        </li>
        <li>
          Click on a tile to open it.
        </li>
        <li>
          If your health reaches 0, you've lost.
        </li>
        <li>
          If you manage to level up to 9, you can defeat the boss (level 9 mine) without taking damage.
        </li>
        <li>
          After you win or lose, feel free to record your results to see how it tracks on the scoreboard!
        </li>
      </ul>


      <h1>Top 5 - Scoreboard:</h1>
      <table id="scoreboardTable" border="2">
        <tbody>
        <th>Rank</th>
        <th>Username</th>
        <th>Level</th>
        <th>Time</th>
        <th>Health</th>
          {scores.map((score, index) => {
            return (
              <tr key={index + 1}>
                <th>{index + 1}</th>
                <th>{score.username}</th>
                <th>{score.level}</th>
                <th>{score.time}</th>
                <th>{score.health}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )

}