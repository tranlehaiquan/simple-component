import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button>
          Hello
        </Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
