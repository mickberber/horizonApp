import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return(<div>{this.props.text}</div>)
  }
}
