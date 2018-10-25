import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import Board from './components/Board.jsx';
import { Provider } from 'react-redux';
import store from './config/store.jsx';
import Game from './components/Game/index.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highScore: [],
      boardSize: 10,
      playerPosition: [5, 5],
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/highscore',
    //   success: (data) => {
    //     this.setState({
    //       highScore: data.score,
    // user: data.user
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render() {
    return (<div>
      <h1 style={{
        margin: '0px auto',
        fontFamily: 'butcherman',
        textAlign: 'center',
        margin: '0px',
        color: 'white',
      }}>
        Thriller
      </h1>
      <Game />
    </div>)
  }
}

ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('app'));