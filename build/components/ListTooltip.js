'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('@material-ui/core/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Popper = require('@material-ui/core/Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _Fade = require('@material-ui/core/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _styles = require('@material-ui/core/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    listitem: {
      padding: '0.2rem 0.6rem',
      width: '100%'
    },
    listitemtext: {
      fontSize: '0.75rem',
      minWidth: '100%'
    }
  };
};

var ListTooltip = function ListTooltip(_ref) {
  var classes = _ref.classes,
      dataList = _ref.dataList,
      open = _ref.open,
      anchorEl = _ref.anchorEl,
      container = _ref.container;
  return _react2.default.createElement(
    _Popper2.default,
    {
      open: open,
      anchorEl: anchorEl,
      container: container,
      transition: true,
      placement: 'top',
      modifiers: {
        preventOverflow: {
          enabled: true,
          boundariesElement: 'window'
        }
      }
    },
    function (_ref2) {
      var TransitionProps = _ref2.TransitionProps;
      return _react2.default.createElement(
        _Fade2.default,
        _extends({}, TransitionProps, { timeout: 350 }),
        _react2.default.createElement(
          _Paper2.default,
          null,
          _react2.default.createElement(
            _List2.default,
            { dense: true },
            dataList.map(function (d, i) {
              return _react2.default.createElement(
                _ListItem2.default,
                { key: i, className: classes.listitem },
                _react2.default.createElement(_ListItemText2.default, {
                  primary: d.label,
                  secondary: d.value,
                  className: classes.listitemtext
                })
              );
            })
          )
        )
      );
    }
  );
};

exports.default = (0, _styles.withStyles)(styles)(ListTooltip);