import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Scoreboard from './components/scoreboard/Scoreboard.jsx';
import Player from './components/playerInfo/Player.jsx';
import Board from './components/game/Board.jsx';

ReactDOM.render(
  <App>
    {() => ( // this line gives the ability to pass properties to each child
      <div id="mainContainer">
        <Board/>
        {/* <Player/>
        <Scoreboard/> */}
      </div>
    )}
  </App>,
  document.getElementById('app'),
);