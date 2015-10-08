import React from 'react';
import Radium from 'radium';

export default class VideoTile extends React.Component {
  render() {
    return <div>
      <a href="#" onClick={this.props.onVideoClicked}>
        <img style={styles.image} src={this.props.src}/>
      </a>
    </div>;
  }
}

const styles = {
  image: {
    width: '150px'
  }
};
