'use strict';

function Quiz(props) {
    return (
        <p>This is where the quiz goes!</p>
    );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
        <Quiz/>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(App), domContainer);