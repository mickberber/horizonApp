import React, { Component } from 'react';
import Messages from './messages';
import Horizon from '@horizon/client';

const hz = Horizon();

const chat = hz('messages');

class App extends Component {
  render() {
    return (
        <Messages chat={chat}/>
      );
  }
}

export default App;
