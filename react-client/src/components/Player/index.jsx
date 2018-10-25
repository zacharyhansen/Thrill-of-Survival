import React from 'react';
import { connect } from 'react-redux';
import playerSprite from './sprite1.png'
import doMovement from './movement.jsx';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../../config/constants.js';

const Player = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${playerSprite})`,
        backgroundPosition: props.spriteLocation,
        width: `${PLAYER_WIDTH}px`,
        height: `${PLAYER_HEIGHT}px`,
      }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    position: state.player.position,
    spriteLocation: state.player.spriteLocation,
  }
}

export default connect(mapStateToProps)(doMovement(Player));