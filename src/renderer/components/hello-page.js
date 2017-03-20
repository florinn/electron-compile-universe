import React from 'react';
import { hashHistory } from 'react-router';

export default class HelloPage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello!',
      welcome: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      welcome: false
    });
  }

  handleClick() {
    hashHistory.push('/emoji');
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{this.state.message}</h1>

        <div>
          <img src="../assets/images/electron.svg" alt="" width="128px" ref="electronImg" />
          <img src="../assets/images/react.ico" alt="" width="128px" ref="reactImg" />
        </div>

      </div>
    );
  }
}
