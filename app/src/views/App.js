import React, { Component } from 'react';
import '../App.css';

import { GoogleLogin } from 'react-google-login';

class App extends Component {
  render() {
    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <body>
        <h1>Let's Youtube</h1>

        <GoogleLogin
          clientId="997089399413-p7h0oiugn12uf21v1mnii4n6k8fphmfn.apps.googleusercontent.com"
          buttonText="Login"
          scope="https://www.googleapis.com/auth/youtube"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </body>
    );
  }
}
export default App;
