const initialState = {
  tiles: [],
  enemies: [0],
  gameOver: false,
  score: 0,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TILES':
      return Object.assign({}, state, {
        tiles: action.payload.tiles,
      })
    case 'END_GAME':
      return Object.assign({}, state, {
        gameOver: action.payload.gameOver,
      })
    case 'MOVE_ENEMY':
      return Object.assign({}, state, {
        score: action.payload.score,
      })
    case 'MOVE_ENEMY2':
      return Object.assign({}, state, {
        score: action.payload.score,
      })
    case 'MOVE_ENEMY3':
      return Object.assign({}, state, {
        score: action.payload.score,
      })
    case 'MOVE_ENEMY4':
      return Object.assign({}, state, {
        score: action.payload.score,
      })
    // case 'ADD_ENEMY':
    //   return {
    //     enemies: action.payload.enemies,
    //   }
    default:
      return state;
  }
}

export default boardReducer;