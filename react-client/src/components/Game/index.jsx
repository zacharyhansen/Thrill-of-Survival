import React from 'react';
import Player from '../Player/index.jsx';
import Enemy from '../Enemies/index.jsx';
import Enemy2 from '../Enemy2/index.jsx';
import Enemy3 from '../Enemy3/index.jsx';
import Enemy4 from '../Enemy4/index.jsx';
import Board from '../Board/index.jsx';
import { BOARD_HEIGHT, BOARD_WIDTH } from '../../config/constants.js';
import tiles from '../../data/maps/1/index.jsx';
import store from '../../config/store.jsx';
import GameOver from '../GameOver/index.jsx';
import Results from '../Results/index.jsx';
import Restart from '../Restart/index.jsx';

const Game = (props) => {
  store.dispatch({
    type: 'ADD_TILES',
    payload: {
      tiles,
    },
  });
  return (
    <div style={{
      position: 'relative',
      width: `${BOARD_WIDTH}px`,
      height: `${BOARD_HEIGHT}px`,
      margin: '10px auto',
    }}>
      <GameOver />
      <Board />
      {/* {props.enemies.map((index) => <Enemy index={index} />)} */}
      <Player />
      <Enemy index={0} />
      <Enemy2 />
      <Enemy3 />
      <Enemy4 />
      <span>
        <Results />
        <Restart />
      </span>
    </div>
  )
}

export default Game;