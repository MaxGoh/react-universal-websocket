import { Component } from 'react'
import PropTypes, { instanceOf } from 'prop-types'
import WebSocket from './WebSocket'

class WebSocketProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    socket: instanceOf(WebSocket),
    socketURL: PropTypes.string.isRequired,
    debug: PropTypes.bool.isRequired,
    onMessage: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
  }

  static defaultProps = {
    debug: false
  }

  static childContextTypes = {
    socket: instanceOf(WebSocket).isRequired
  }

  constructor(props, context) {
    super(props, context)
    const { socketURL, onOpen, onMessage, onClose } = this.props
    this.socket = new WebSocket(socketURL)
    let webSocket = this.socket

    webSocket.onopen = () => {
      this.logStatus('Open')
      if (typeof onOpen === 'function') onOpen(webSocket)
    }

    webSocket.onmessage = event => {
      this.logStatus('Message')
      if (typeof onMesssage === 'function') onMessage(webSocket, event.data)
    }

    webSocket.onclose = () => {
      this.logStatus('Close')
      if (typeof onClose === 'function') onClose()
    }
  }

  logStatus(logMessage) {
    if (this.props.debug) console.log(new Date() + 'WebSocket: ', logMessage)
  }

  getChildContext() {
    return {
      socket: this.socket
    }
  }

  render() {
    return this.props.children
  }
}

export default WebSocketProvider
