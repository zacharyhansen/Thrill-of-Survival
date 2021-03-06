const initialState = {
  position: [0, 0],
  direction: 'east',
  spriteLocation: '0% 55%',
  walkIndex: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
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

export default playerReducer;