import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return(<div>
            <h3>{this.props.author}</h3>
            <p>{this.props.text}</p>
          </div>)
  }
}
