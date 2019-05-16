import React from 'react';
import { observer, inject } from 'mobx-react';

import { IMobxStore } from '../stores/mobxStore';

interface AppProps {
  mobxStore?: IMobxStore;
}

@inject('mobxStore')
@observer
class App extends React.Component<AppProps> {
  private clickHandler = () => {
    const { setName, name } = this.props.mobxStore!;
    if (name === 'Huhu') {
      setName('Hehe');
    } else {
      setName('Huhu');
    }
  };

  private getPokemon = () => {
    const { getDitto } = this.props.mobxStore!;
    getDitto();
  };

  render() {
    const { greeting } = this.props.mobxStore!;

    return (
      <div className="App">
        <header className="App-header">
          {greeting}
          <button onClick={this.clickHandler}>Change Greeting</button>
          <button onClick={this.getPokemon}>Pokemon</button>
        </header>
      </div>
    );
  }
}

export default App;
