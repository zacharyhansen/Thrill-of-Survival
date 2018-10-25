const initialState = {
  position: [65 * 15, 70 * 2],
  direction: 'east',
  spriteLocation: '0% 55%',
  walkIndex: 0,
};

const enemyReducer2 = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_ENEMY2':
      return {
        position: action.payload.position,
        direction: action.payload.direction,
        spriteLocation: action.payload.spriteLocation,
        walkIndex: action.payload.walkIndex,
      }
    default:
      return state;
  }
}

export default enemyReducer2;