import React from 'react';

export default class EmojiWallPage extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundImage: null
    };
    this.handleDrag = this.handleDrag.bind(this);
  }

  async componentDidMount() {
    let response = await window.fetch('https://pimg-threadbias-com.s3.amazonaws.com/blog_posts/8/2/square_886120b8158ae8eb3fcc41fce70cbb5a.png');
    let imgBlob = await response.blob();
    this.setState({
      backgroundImage: URL.createObjectURL(imgBlob)
    });
  }

  handleDrag(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="emoji-wall">
        <img onDrag={this.handleDrag} src={this.state.backgroundImage} alt="Wall of emoji" width="580px" />
      </div>
    );
  }
}
