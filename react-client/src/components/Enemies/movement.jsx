import store from '../../config/store.jsx';
import { PLAYER_WIDTH, PLAYER_HEIGHT, BOARD_HEIGHT, BOARD_WIDTH } from '../../config/constants.js';
// import tiles from

const doEnemyMovement = (enemy) => {

  const getNewPosition = (oldPosition, direction) => {
    switch (direction) {
      case 'west':
        return [oldPosition[0] - PLAYER_WIDTH, oldPosition[1]];
      case 'east':
        return [oldPosition[0] + PLAYER_WIDTH, oldPosition[1]];
      case 'north':
        return [oldPosition[0], oldPosition[1] - PLAYER_HEIGHT];
      case 'south':
        return [oldPosition[0], oldPosition[1] + PLAYER_HEIGHT];
    }
  }

  const moveCharacter = (position, direction) => {
    const playerPosition = store.getState().player.position;
    if (playerPosition[0] === position[0] && playerPosition[1] === position[1]) {
      clearInterval(enemyInterval);
      store.dispatch({
        type: 'END_GAME',
        payload: {
          gameOver: true,
        }
      })
    }
    let walkIndex = store.getState().enemy.walkIndex + 1;
    if (walkIndex > 7) walkIndex = 0;
    store.dispatch({
      type: 'MOVE_ENEMY',
      payload: {
        position,
        direction,
        spriteLocation: getSpriteLocation(direction, walkIndex),
        walkIndex,
        score: store.getState().board.score + 1,
      }
    });
  }

  const getSpriteLocation = (direction, walkIndex) => {
    switch (direction) {
      case 'north':
        return `${walkIndex * 8.25}% ${8 * 5.05}%`;
      case 'west':
        return `${walkIndex * 8.25}% ${9 * 5.05}%`;
      case 'south':
        return `${walkIndex * 8.25}% ${10 * 5.05}%`;
      case 'east':
        return `${walkIndex * 8.25}% ${11 * 5.05}%`;
    }
  }
  const enforceBoundry = (newPosition) => {
    return (newPosition[0] >= 0 && newPosition[0] <= BOARD_WIDTH && newPosition[1] >= 0 && newPosition[1] <= BOARD_HEIGHT);
  }

  const enforceObstructions = (newPosition) => {
    const tiles = store.getState().board.tiles;
    const x = (newPosition[0]) / PLAYER_WIDTH;
    const y = (newPosition[1]) / PLAYER_HEIGHT;
    return (tiles[y][x] < 5);
  }

  const attemptMove = (direction) => {
    const oldPosition = store.getState().enemy.position;
    const newPosition = getNewPosition(oldPosition, direction)
    if (enforceBoundry(newPosition) && enforceObstructions(newPosition)) {
      moveCharacter(newPosition, direction);
    }

  }

  // RANDOM MOVE
  // const handleKeyDown = () => {
  //   const num = Math.floor(Math.random() * Math.floor(4))
  //   switch (num) {
  //     case 0:
  //       return attemptMove('west');
  //     case 1:
  //       return attemptMove('north');
  //     case 2:
  //       return attemptMove('east');
  //     case 3:
  //       return attemptMove('south');
  //   }
  // }

  // FOLLOW MOVE
  const handleKeyDown = () => {
    if (store.getState().board.gameOver) clearInterval(enemyInterval);
    switch (getEnemyMove()) {
      case 0:
        return attemptMove('west');
      case 1:
        return attemptMove('north');
      case 2:
        return attemptMove('east');
      case 3:
        return attemptMove('south');
    }
  }

  const getEnemyMove = () => {
    const playerPosition = store.getState().player.position;
    const enemyPosition = store.getState().enemy.position;
    const moves = [];
    if (playerPosition[0] === enemyPosition[0]) {
      if (playerPosition[1] > enemyPosition[1]) return 3;
      else return 1;
    }
    if (playerPosition[1] === enemyPosition[1]) {
      if (playerPosition[0] > enemyPosition[0]) return 2;
      else return 0;
    }
    if (playerPosition[0] > enemyPosition[0]) {
      return 2;
    }
    if (playerPosition[1] > enemyPosition[1]) {
      return 3;
    }
    else return 1;
  }

  let enemyInterval = setInterval(handleKeyDown, 500);

  return enemy;
}

export default doEnemyMovement;