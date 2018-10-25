const initialState = {
  position: [65 * 19, 70 * 8],
  direction: 'east',
  spriteLocation: '0% 55%',
  walkIndex: 0,
};

const enemyReducer4 = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_ENEMY4':
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

export default enemyReducer4;