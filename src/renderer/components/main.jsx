import React from 'react';
import EmojiWall from './emoji-wall';

const TITLEBAR_HEIGHT = 30;

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello!',
      welcome: true
    };
  }

  handleClick() {
    this.setState({
      welcome: false
    });
  }

  render() {
    let img;

    if (this.state.welcome) {
      img =
        <div>
          <img src="../assets/images/electron.svg" alt="" width="128px" ref="electronImg" />
          <img src="../assets/images/react.ico" alt="" width="128px" ref="reactImg" />
        </div>;
    } else {
      img = <EmojiWall />;
    }

    return (
      <div className="main" onClick={this.handleClick.bind(this)} ref="main" style={{
        paddingTop: TITLEBAR_HEIGHT
      }}>
        <h1>{this.state.message}</h1>

        {img}

      </div>
    );
  }
}
