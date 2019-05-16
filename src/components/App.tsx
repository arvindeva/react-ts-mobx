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
    const { setName } = this.props.mobxStore!;
    console.log('I am clicked');
    setName('Bob');
  };

  render() {
    const { greeting } = this.props.mobxStore!;

    return (
      <div className="App">
        <header className="App-header">
          {greeting}
          <button onClick={this.clickHandler}>Change Greeting</button>
        </header>
      </div>
    );
  }
}

export default App;
