import React, { Component } from 'react';
import '../App.css';
import YouTube from 'react-youtube';

const { google } = require('googleapis');

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

      const oauth2Client = new google.auth.OAuth2(
        '997089399413-p7h0oiugn12uf21v1mnii4n6k8fphmfn.apps.googleusercontent.com',
        'T_C2SIf_7z1IXeVrLR_LEiH5',
        'http://localhost:9000'
      );

      // generate a url that asks permissions for Google+ and Google Calendar scopes
      const scopes = ['https://www.googleapis.com/auth/youtube'];

      const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',

        // If you only need one scope you can pass it as a string
        scope: 'https://www.googleapis.com/auth/youtube'
      });
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
