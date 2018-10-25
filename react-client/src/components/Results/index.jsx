import React from 'react';
import { connect } from 'react-redux';

const Results = (props) => {
  return (
    <span><div className="results">{props.score}</div><div className="hsImage">t</div><text className="highScore">Zach Hansen: 689</text></span>
    // <span><img src="http://pixelartmaker.com/art/92a0da31cd356c7.png"></img><div className="results">{props.score}</div><text className="highScore">HIGHSCHORE: Zach Hansen: 689</text></span>

  )
}

const mapStateToProps = (state) => {
  return {
    score: state.board.score,
  }
}
export default connect(mapStateToProps)(Results);