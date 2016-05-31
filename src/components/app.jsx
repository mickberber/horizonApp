import React, { Component } from 'react';
import Messages from './messages';
import Horizon from '@horizon/client';
import SendButton from './sendButton';

const hz = Horizon();

const chat = hz('messages');

class App extends Component {
  render() {
    return (
        <div>
          <SendButton/>
          <Messages chat={chat}/>
        </div>
      );
  }
}

export default App;
