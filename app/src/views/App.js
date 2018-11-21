import React, { Component } from 'react';
import '../App.css';
import YouTube from 'react-youtube';

class App extends Component {
  render() {
    {
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

      return (
        <body>
          {' '}
          <h1>Let's Youtube</h1> <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
        </body>
      );
    }
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default App;
