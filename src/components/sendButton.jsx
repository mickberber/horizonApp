import React, { Component } from 'react';
import Horizon from '@horizon/client';
const hz = Horizon();
const chat = hz('messages');

class SendButton extends Component {
  sendMessage() {
    let message = {
      text: "this message was sent to RethinDB",
      datetime: new Date(),
      author: '@steedhelix'
    }
    console.log(message);
    chat.store(message);
  }
  render() {
    return(<button onClick={this.sendMessage}>Send</button>)
  }
}

export default SendButton;
