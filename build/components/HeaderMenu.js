'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@material-ui/core');

var _icons = require('@material-ui/icons');

var _styles = require('@material-ui/core/styles');

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles() {
  return {
    icon: {
      marginLeft: '20px'
    },
    menuLink: {
      width: '100%',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '16px',
      paddingRight: '16px'
    },
    menuItem: {
      paddingLeft: '0px',
      paddingRight: '0px'
    }
  };
};

var HeaderMenu = function (_Component) {
  _inherits(HeaderMenu, _Component);

  function HeaderMenu(props) {
    _classCallCheck(this, HeaderMenu);

    var _this = _possibleConstructorReturn(this, (HeaderMenu.__proto__ || Object.getPrototypeOf(HeaderMenu)).call(this, props));

    _this.handleMenuToggle = function (event) {
      var anchorEl = _this.state.anchorEl;

      _this.setState({
        anchorEl: anchorEl === null ? event.currentTarget : null
      });
    };

    _this.handleMenuClose = function () {
      _this.setState({
        anchorEl: null
      });
    };

    _this.handleListKeyDown = function (event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        _this.setState({
          anchorEl: null
        });
      }
    };

    _this.state = {
      anchorEl: null
    };
    return _this;
  }

  _createClass(HeaderMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var anchorEl = this.state.anchorEl;
      var _props = this.props,
          items = _props.items,
          placement = _props.placement,
          classes = _props.classes;

      var isMenuOpen = Boolean(anchorEl);

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          _core.IconButton,
          {
            className: classes.icon,
            size: 'medium',
            color: 'inherit',
            'aria-label': 'open header menu',
            'aria-haspopup': 'true',
            onClick: this.handleMenuToggle
          },
          isMenuOpen ? _react2.default.createElement(_icons.Close, null) : _react2.default.createElement(_icons.Menu, null)
        ),
        _react2.default.createElement(
          _core.Popper,
          {
            open: isMenuOpen,
            anchorEl: anchorEl,
            role: undefined,
            transition: true,
            disablePortal: true,
            placement: placement || 'bottom-start'
          },
          function (_ref) {
            var TransitionProps = _ref.TransitionProps;
            return _react2.default.createElement(
              _core.Fade,
              TransitionProps,
              _react2.default.createElement(
                _core.Paper,
                null,
                _react2.default.createElement(
                  _core.ClickAwayListener,
                  { onClickAway: _this2.handleMenuClose },
                  _react2.default.createElement(
                    _core.MenuList,
                    { onKeyDown: _this2.handleListKeyDown },
                    items.map(function (item, i) {
                      return _react2.default.createElement(
                        _core.MenuItem,
                        {
                          onClick: _this2.handleMenuClose,
                          key: i,
                          dense: true,
                          className: classes.menuItem
                        },
                        _react2.default.createElement(
                          _Link2.default,
                          {
                            external: item.external,
                            to: item.url,
                            className: classes.menuLink
                          },
                          item.name
                        )
                      );
                    })
                  )
                )
              )
            );
          }
        )
      );
    }
  }]);

  return HeaderMenu;
}(_react.Component);

exports.default = (0, _styles.withStyles)(styles)(HeaderMenu);