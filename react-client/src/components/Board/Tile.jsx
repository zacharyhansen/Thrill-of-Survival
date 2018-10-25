import React from 'react';
import { PLAYER_WIDTH, PLAYER_HEIGHT, BOARD_HEIGHT, BOARD_WIDTH } from '../../config/constants.js';
import css from '../../../dist/styles/styles.css';

const getTileImage = (type) => {
  switch (type) {
    case 0:
      return 'grass'
    case 5:
      return 'tombstone'
    case 6:
      return 'pumpkin'
    case 7:
      return 'scarecrow'
  }
}

const Tile = (props) => {
  return (
    <div
      className={`tile ${getTileImage(props.tile)}`}
      style={{
        height: PLAYER_HEIGHT,
        width: PLAYER_WIDTH,
      }}
    ></div>
  )
}

export default Tile;