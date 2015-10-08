import React from 'react';
import Radium from 'radium';

import VideoTile from 'components/VideoTile';

export default class VideoTileGrid extends React.Component {
  render() {
    console.log('VideoTileGrid props', this.props);

    let videos = this.props.videos.map(video => (
      <div style={styles.tile}>
        <VideoTile src={video.thumbnailSrc} onVideoClicked={this.props.onVideoSelected.bind(this, video)}/>
      </div>));
    console.log('VideoTileGrid videos', videos);

    return <div style={styles.grid}>
      {videos}
    </div>;
  }
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap'
  },

  tile: {
    padding: '20px'
  }
};
