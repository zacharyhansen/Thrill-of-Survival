import { createStore, combineReducers } from 'redux';
import playerReducer from '../components/Player/reducer.js'
import boardReducer from '../components/Board/reducer.js';
import enemyReducer from '../components/Enemies/reducer.js';
import enemyReducer2 from '../components/Enemy2/reducer.js';
import enemyReducer3 from '../components/Enemy3/reducer.js';
import enemyReducer4 from '../components/Enemy4/reducer.js';

const rootReducer = combineReducers({
  player: playerReducer,
  board: boardReducer,
  enemy: enemyReducer,
  enemy2: enemyReducer2,
  enemy3: enemyReducer3,
  enemy4: enemyReducer4,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;