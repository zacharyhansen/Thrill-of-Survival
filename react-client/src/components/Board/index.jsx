import React from 'react';
import TileRow from './TileRow.jsx';
import { connect } from 'react-redux';
import { BOARD_HEIGHT, BOARD_WIDTH } from '../../config/constants.js';

const Board = (props) => {
  return (
    <div style={{
      width: `${BOARD_WIDTH}px`,
      height: `${BOARD_HEIGHT}px`,
      // backgroundColor: '#1F722F',
      margin: '10px auto',
    }}>
      {
        props.tiles.map((tileRow) => <TileRow tileRow={tileRow} />)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    tiles: state.board.tiles,
  }
}

export default connect(mapStateToProps)(Board);
