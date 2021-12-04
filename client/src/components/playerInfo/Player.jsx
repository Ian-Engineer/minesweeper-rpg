import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App.jsx";
import { useStopwatch } from 'react-timer-hook';

export const PlayerContext = React.createContext()

export default function Player(props) {
  // set state variables

  const { setHealth, setLevel, setExp, health, level, exp, levelsExp, gameEnd, started, setTime } = useContext(AppContext)

  const {
    seconds,
    minutes,
    hours,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  // use effect
  useEffect(() => {
    if (gameEnd) {
      pause();
      setTime(hours*3600 + minutes * 60 + seconds)
    }
  }, [exp, level, health, gameEnd, started])


  // return
  return (
    <>
    <div id="playerInfo">
      <div id="health">
        {`Health: ${health}`}
      </div>
      <div id="level">
        {`Level: ${level}`}
      </div>
      <div>
        {`Experience: ${exp}/${levelsExp[level] + 1}`}
      </div>
      <div>
        <div style={{textAlign: 'center'}}>
        <div>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
    </div>
          {/* <div id="playbuttons">
              <button onClick={start}>Start</button>
              <button onClick={reset}>Reset</button>
          </div> */}
    </div>
    </>
  )
}