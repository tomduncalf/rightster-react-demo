import React from 'react';

export default class VideoPlayer extends React.Component {
  render() {
    return <div><video src={this.props.uri} autoPlay/></div>;
  }
}
