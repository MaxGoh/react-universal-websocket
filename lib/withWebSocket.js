'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

exports.default = withWebSocket

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _WebSocket = require('./WebSocket')

var _WebSocket2 = _interopRequireDefault(_WebSocket)

var _hoistNonReactStatics = require('hoist-non-react-statics')

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _objectWithoutProperties(obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function withWebSocket(WrapperComponent) {
  var Wrapper = (function(_Component) {
    _inherits(Wrapper, _Component)

    function Wrapper(props, context) {
      _classCallCheck(this, Wrapper)

      return _possibleConstructorReturn(
        this,
        (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props)
      )
    }

    _createClass(Wrapper, [
      {
        key: 'render',
        value: function render() {
          var _props = this.props,
            wrappedComponentRef = _props.wrappedComponentRef,
            props = _objectWithoutProperties(_props, ['wrappedComponentRef'])

          return _react2.default.createElement(
            WrapperComponent,
            _extends({}, props, {
              socket: this.context.socket,
              ref: wrappedComponentRef
            })
          )
        }
      }
    ])

    return Wrapper
  })(_react.Component)

  Wrapper.WrapperComponent = WrapperComponent
  Wrapper.propTypes = {
    wrappedComponentRef: _propTypes2.default.func
  }
  Wrapper.contextTypes = {
    socket: (0, _propTypes.instanceOf)(_WebSocket2.default).isRequired
  }

  return (0, _hoistNonReactStatics2.default)(Wrapper, WrapperComponent, {
    WrappedComponent: true
  })
}
