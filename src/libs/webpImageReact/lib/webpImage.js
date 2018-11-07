'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WebpImage = function (_Component) {
    _inherits(WebpImage, _Component);

    function WebpImage(props) {
        _classCallCheck(this, WebpImage);

        // console.log(this.props)
        var _this = _possibleConstructorReturn(this, (WebpImage.__proto__ || Object.getPrototypeOf(WebpImage)).call(this, props));

        _this.state = {
            source: ''
        };
        return _this;
    }

    _createClass(WebpImage, [{
        key: 'render',
        value: function render() {
            console.log(this.state.source);
            var imgSource = void 0;
            if (this.state.source) {
                imgSource = _react2.default.createElement('img', { src: this.state.source, width: this.props.width, height: this.props.height, className: this.props.className });
            } else {
                imgSource = '';
            }
            return _react2.default.createElement(
                'div',
                null,
                imgSource
            );
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            // ...
            if (nextProps) {
                this.convertWebP(nextProps);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.convertWebP(this.props);
        }
    }, {
        key: 'convertWebP',
        value: function convertWebP(nextProps) {
            var canvas = document.createElement('canvas');
            if (Boolean(canvas.getContext && canvas.getContext('2d'))) {
                if (canvas.toDataURL('image/webp').indexOf('data:image/webp') > -1 && nextProps.source) {
                    if (nextProps.source.indexOf('?x-oss-process=image') > -1) {
                        this.setState({
                            source: nextProps.source + "/format,webp"
                        });
                    } else {
                        this.setState({
                            source: nextProps.source + "?x-oss-process=image/format,webp"
                        });
                    }
                } else {
                    this.setState({
                        source: nextProps.source
                    });
                }
            }
        }
    }]);

    return WebpImage;
}(_react.Component);

exports.default = WebpImage;