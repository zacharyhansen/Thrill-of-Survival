import React from 'react';
import { connect } from 'react-redux';

const GameOver = (props) => {
  if (!props.gameOver) return null;
  return (
    <div className="gameOver"></div>
  )
}

const mapStateToProps = (state) => {
  return {
    gameOver: state.board.gameOver,
    score: state.board.score,
  }
}
export default connect(mapStateToProps)(GameOver);