import { Component } from 'react'
import PropTypes, { instanceOf } from 'prop-types'
import WebSocket from './WebSocket'

class WebSocketProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    socket: instanceOf(WebSocket),
    socketURL: PropTypes.string.isRequired
  }

  static childContextTypes = {
    socket: instanceOf(WebSocket).isRequired
  }

  constructor(props, context) {
    super(props, context)
    const { socketURL } = this.props

    this.socket = new WebSocket(socketURL)
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
