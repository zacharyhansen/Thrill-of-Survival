import React from 'react';
import { connect } from 'react-redux';

const Restart = (props) => {
  return (
    <div className="restart">text</div>
  )
}

const mapStateToProps = (state) => {
  return {
    score: state.board.score,
  }
}
export default connect(mapStateToProps)(Restart);