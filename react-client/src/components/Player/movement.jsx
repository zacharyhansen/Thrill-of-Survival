import store from '../../config/store.jsx';
import { PLAYER_WIDTH, PLAYER_HEIGHT, BOARD_HEIGHT, BOARD_WIDTH } from '../../config/constants.js';
// import tiles from

const doMovement = (player) => {

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
    let walkIndex = store.getState().player.walkIndex + 1;
    if (walkIndex > 7) walkIndex = 0;
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position,
        direction,
        spriteLocation: getSpriteLocation(direction, walkIndex),
        walkIndex,
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
    const oldPosition = store.getState().player.position;
    const newPosition = getNewPosition(oldPosition, direction)
    if (enforceBoundry(newPosition) && enforceObstructions(newPosition)) {
      moveCharacter(newPosition, direction);
    }
  }
  const handleKeyDown = (e) => {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return attemptMove('west');
      case 38:
        return attemptMove('north');
      case 39:
        return attemptMove('east');
      case 40:
        return attemptMove('south');
    }
  }
  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })

  return player;
}

export default doMovement;