import React, { Component } from 'react';

class Messages extends Component {
  constructor(props) {
    super(props)
    this.chat = props.chat;
    this.state = {
      convo: []
    };
  }
  componentDidMount() {
    this.chat.fetch().subscribe(
      (messages) => {
        messages.forEach((message) => {
          // Each result from the chat collection
          //  will pass through this function
          this.state.convo.push(message);
        })
        this.setState({convo: this.state.convo});
      },
      // If an error occurs, this function
      //  will execute with the `err` message
      (err) => {
        console.log(err);
      }
    );
  }

  render() {

    var html = this.state.convo.map(function(message) {
          return <li>{message.author}</li>
        });

    return (<div>{html}</div>);
  }
}

export default Messages;
