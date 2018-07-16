import React, { Component } from 'react'
import PropTypes, { instanceOf } from 'prop-types'
import WebSocket from './WebSocket'
import hoistStatics from 'hoist-non-react-statics'

export default function withWebSocket(WrapperComponent) {
  class Wrapper extends Component {
    static WrapperComponent = WrapperComponent

    static propTypes = {
      wrappedComponentRef: PropTypes.func
    }

    static contextTypes = {
      socket: instanceOf(WebSocket).isRequired
    }

    //constructor(props, context) {
    //super(props)
    //}

    render() {
      const { wrappedComponentRef, ...props } = this.props
      return (
        <WrapperComponent
          {...props}
          socket={this.context.socket}
          ref={wrappedComponentRef}
        />
      )
    }
  }

  return hoistStatics(Wrapper, WrapperComponent, { WrappedComponent: true })
}
