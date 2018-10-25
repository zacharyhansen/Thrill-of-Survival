const initialState = {
  position: [65 * 1, 70 * 1],
  direction: 'east',
  spriteLocation: '0% 55%',
  walkIndex: 0,
};

const enemyReducer3 = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_ENEMY3':
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

export default enemyReducer3;