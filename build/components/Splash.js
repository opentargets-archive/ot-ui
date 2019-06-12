'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _reactMeasure = require('react-measure');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {
    splash: {
      left: 0,
      top: 0,
      // background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${
      //   theme.palette.primary.light
      // } 90%)`,
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: -1
    }
  };
};

var DATA = [];
var uniformGenerator = d3.randomUniform();
for (var i = 0; i < 500; i++) {
  DATA.push([uniformGenerator(), uniformGenerator()]);
}

var Splash = function (_React$Component) {
  _inherits(Splash, _React$Component);

  function Splash(props) {
    _classCallCheck(this, Splash);

    var _this = _possibleConstructorReturn(this, (Splash.__proto__ || Object.getPrototypeOf(Splash)).call(this, props));

    _this.svgRef = _react2.default.createRef();
    return _this;
  }

  _createClass(Splash, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._renderVoronoi();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._renderVoronoi();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          measureRef = _props.measureRef;

      return _react2.default.createElement(
        'div',
        { className: classes.splash, ref: measureRef },
        _react2.default.createElement('svg', { ref: function ref(node) {
            return _this2.svgRef = node;
          } })
      );
    }
  }, {
    key: '_dimensions',
    value: function _dimensions() {
      var contentRect = this.props.contentRect;
      var _contentRect$bounds = contentRect.bounds,
          width = _contentRect$bounds.width,
          height = _contentRect$bounds.height;

      return { width: width, height: height };
    }
  }, {
    key: '_renderVoronoi',
    value: function _renderVoronoi() {
      var svg = d3.select(this.svgRef);

      var _dimensions2 = this._dimensions(),
          width = _dimensions2.width,
          height = _dimensions2.height;

      // scale data and svg to parent dims


      var data = DATA.map(function (d) {
        return [d[0] * width, d[1] * height];
      });
      svg.attr('width', width).attr('height', height);

      // create voronoi generator
      var voronoi = d3.voronoi().extent([[-1, -1], [width, height]]);

      // join
      var pointsVoronoi = svg.selectAll('path').data(voronoi.polygons(data));

      pointsVoronoi.enter().append('path').attr('stroke', 'white').attr('stroke-opacity', 0.3).attr('fill', 'none').merge(pointsVoronoi).attr('d', function (d) {
        return d ? 'M' + d.join('L') + 'Z' : null;
      });

      pointsVoronoi.exit().remove();
    }
  }]);

  return Splash;
}(_react2.default.Component);

Splash = (0, _reactMeasure.withContentRect)('bounds')(Splash);

exports.default = (0, _styles.withStyles)(styles)(Splash);