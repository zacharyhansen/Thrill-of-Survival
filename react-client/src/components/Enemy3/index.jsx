import React from 'react';
import { connect } from 'react-redux';
import enemySprite from './spriteEnemy.png'
import doEnemyMovement from './movement.jsx';
import { PLAYER_WIDTH, PLAYER_HEIGHT } from '../../config/constants.js';

const Enemy3 = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        // backgroundImage: 'https://opengameart.org/sites/default/files/styles/medium/public/grass.png',
        backgroundImage: `url(${enemySprite})`,
        backgroundPosition: props.spriteLocation,
        width: `${PLAYER_WIDTH}px`,
        height: `${PLAYER_HEIGHT}px`,
      }}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    position: state.enemy3.position,
    spriteLocation: state.enemy3.spriteLocation,
  }
}

export default connect(mapStateToProps)(doEnemyMovement(Enemy3));