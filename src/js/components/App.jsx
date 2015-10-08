import React from 'react';

import VideoTileGrid from 'components/VideoTileGrid';
import VideoPlayer from 'components/VideoPlayer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedContentViewId: null, videoUri: null };
  }

  async componentDidMount() {
    let response = await fetch('http://platformplayer.my.rightster.com/api/v1/assembly.player.getConfig?placementId=088bef5a-acb2-4459-93e7-52d1d5457368&playerType=HTML5&hls=false');
    let json = await response.json();

    let playlistVideos = json.playlist.index.map(video => ({
      thumbnailSrc: video.images[0].uri,
      contentViewId: video.contentViewId
    }));

    this.setState({ videos: playlistVideos });

    console.log(json);
    console.log('playlistVideos', playlistVideos);
  }

  async handleVideoSelected(video) {
    console.log('handleVideoSelected', video);
    this.setState({ selectedContentViewId: video.contentViewId });

    let response = await fetch(`http://platformplayer.my.rightster.com/api/v1/assembly.player.getContent?contentViewId=${video.contentViewId}&placementId=088bef5a-acb2-4459-93e7-52d1d5457368&playerType=HTML5`);
    let json = await response.json();
    let videoUri = json.content.assets.videos[3].uri;

    this.setState({ videoUri: videoUri });

    console.log('video JSON', json);
    console.log('videoUri', videoUri);
  }

  render() {
    console.log(this.state);
    return <div>
      <VideoTileGrid videos={this.state.videos} onVideoSelected={this.handleVideoSelected.bind(this)}/>
      <div>Content view ID: {this.state.selectedContentViewId}</div>
      <VideoPlayer uri={this.state.videoUri} />
    </div>;
  }
}
