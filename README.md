# React-Universal-WebSocket
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

Websocket Provider for Universal React

### Installation

`$ yarn add react-universal-websocket`

### Example Usage

```
// Root.jsx
import React from 'react';
import App from './App';
import { WebSocketProvider } from 'react-universal-websocket';

export default function Root() {
  return (
    <WebSocketProvider socketURL="ws://www.example.com/socketserver">
      <App />
    </WebSocketProvider>
  );
}
```

```
// App.jsx
import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withWebSocket, WebSocket } from 'react-universal-websocket';

class App extends Component {
  static propTypes = {
    socket: instanceOf(WebSocket).isRequired
  };

  constructor(props) {
    super(props);
    const { socket } = this.props;

    this.state = {
        message: []
    };

    socket.onopen = event => {
        socket.send('Hello WebSocket');

        socket.onmessage = event => {
            message.push(event.data);
        }
    };
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <ul>
          {
            message.map((msg, index) => <li key{index}>{msg}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default withWebSocket(App);
```
