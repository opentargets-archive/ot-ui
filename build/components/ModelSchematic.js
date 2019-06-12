'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tooltip = require('@material-ui/core/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    modelSchematic: {
      fontFamily: 'sans-serif'
    },
    entityCircle: {
      strokeWidth: 2,
      stroke: theme.palette.grey[500],
      fill: theme.palette.grey[300]
    },
    entityCircleFixed: {
      fill: theme.palette.primary.main,
      stroke: theme.palette.primary.main
    },
    entityText: {
      fill: theme.palette.grey[500],
      dominantBaseline: 'central',
      textAnchor: 'middle',
      fontSize: 12,
      fontWeight: 'bold',
      '&>tspan': {
        fontSize: 8
      }
    },
    entityTextFixed: {
      fill: theme.palette.primary.contrastText
    },
    connectorLine: {
      strokeWidth: 2,
      stroke: theme.palette.grey[500]
    }
  };
};

var ENTITY_WIDTH = 30;
var ENTITY_RADIUS = ENTITY_WIDTH / 2 - 2;
var CONNECTOR_WIDTH = 20;
var TOTAL_HEIGHT = ENTITY_WIDTH;
var NICENAME_MAP = {
  gene: 'gene',
  variant: 'variant',
  study: 'study',
  indexVariant: 'lead variant',
  tagVariant: 'tag variant'
};
var ICON_LABEL_MAP = {
  gene: 'G',
  variant: 'V',
  study: 'S',
  indexVariant: _react2.default.createElement(
    _react2.default.Fragment,
    null,
    'V',
    _react2.default.createElement(
      'tspan',
      { dy: '6' },
      'L'
    )
  ),
  tagVariant: _react2.default.createElement(
    _react2.default.Fragment,
    null,
    'V',
    _react2.default.createElement(
      'tspan',
      { dy: '6' },
      'T'
    )
  )
};

var ModelSchematic = function ModelSchematic(_ref) {
  var classes = _ref.classes,
      entities = _ref.entities;

  var totalWidth = ENTITY_WIDTH * entities.length + CONNECTOR_WIDTH * (entities.length - 1);

  var tuple = entities.map(function (d) {
    return NICENAME_MAP[d.type];
  });
  var fixed = entities.filter(function (d) {
    return d.fixed;
  }).map(function (d) {
    return NICENAME_MAP[d.type];
  });
  var title = 'This section shows (' + tuple.join(', ') + ') tuples' + (fixed.length > 0 ? ' where the ' + fixed[0] + ' is fixed' : '');
  return _react2.default.createElement(
    _Tooltip2.default,
    { title: title },
    _react2.default.createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        width: totalWidth + 'px',
        height: TOTAL_HEIGHT + 'px',
        className: classes.modelSchematic
      },
      _react2.default.createElement(
        'g',
        null,
        entities.map(function (d, i) {
          var label = ICON_LABEL_MAP[d.type];
          return _react2.default.createElement(
            'g',
            {
              key: i,
              transform: 'translate(' + (ENTITY_WIDTH / 2 + i * (ENTITY_WIDTH + CONNECTOR_WIDTH)) + ',' + TOTAL_HEIGHT / 2 + ')'
            },
            _react2.default.createElement('circle', {
              cx: 0,
              cy: 0,
              r: ENTITY_RADIUS,
              className: (0, _classnames2.default)(classes.entityCircle, _defineProperty({}, classes.entityCircleFixed, d.fixed))
            }),
            _react2.default.createElement(
              'text',
              {
                x: 0,
                y: 0,
                className: (0, _classnames2.default)(classes.entityText, _defineProperty({}, classes.entityTextFixed, d.fixed))
              },
              label
            )
          );
        })
      ),
      _react2.default.createElement(
        'g',
        null,
        entities.map(function (d, i) {
          if (i < entities.length - 1) {
            return _react2.default.createElement('line', {
              x1: ENTITY_WIDTH + i * (ENTITY_WIDTH + CONNECTOR_WIDTH),
              y1: TOTAL_HEIGHT / 2,
              x2: (i + 1) * (ENTITY_WIDTH + CONNECTOR_WIDTH),
              y2: TOTAL_HEIGHT / 2,
              key: i,
              className: classes.connectorLine
            });
          } else {
            return null;
          }
        })
      )
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(ModelSchematic);