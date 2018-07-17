'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WebSocket = require('./WebSocket');

var _WebSocket2 = _interopRequireDefault(_WebSocket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebSocketProvider = function (_Component) {
  _inherits(WebSocketProvider, _Component);

  function WebSocketProvider(props, context) {
    _classCallCheck(this, WebSocketProvider);

    var _this = _possibleConstructorReturn(this, (WebSocketProvider.__proto__ || Object.getPrototypeOf(WebSocketProvider)).call(this, props, context));

    var _this$props = _this.props,
        socketURL = _this$props.socketURL,
        onOpen = _this$props.onOpen,
        onMessage = _this$props.onMessage,
        onClose = _this$props.onClose;

    _this.socket = new _WebSocket2.default(socketURL);
    var webSocket = _this.socket;

    webSocket.onopen = function () {
      _this.logStatus('Open');
      if (typeof onOpen === 'function') onOpen(webSocket);
    };

    webSocket.onmessage = function (event) {
      _this.logStatus('Message');
      if (typeof onMesssage === 'function') onMessage(webSocket, event.data);
    };

    webSocket.onclose = function () {
      _this.logStatus('Close');
      if (typeof onClose === 'function') onClose();
    };
    return _this;
  }

  _createClass(WebSocketProvider, [{
    key: 'logStatus',
    value: function logStatus(logMessage) {
      if (this.props.debug) console.log('WebSocket: ', logMessage);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        socket: this.socket
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return WebSocketProvider;
}(_react.Component);

WebSocketProvider.propTypes = {
  children: _propTypes2.default.node,
  socket: (0, _propTypes.instanceOf)(_WebSocket2.default),
  socketURL: _propTypes2.default.string.isRequired,
  debug: _propTypes2.default.bool.isRequired,
  onMessage: _propTypes2.default.func.isRequired,
  onOpen: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired
};
WebSocketProvider.defaultProps = {
  debug: false
};
WebSocketProvider.childContextTypes = {
  socket: (0, _propTypes.instanceOf)(_WebSocket2.default).isRequired
};
exports.default = WebSocketProvider;