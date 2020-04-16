'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('@material-ui/core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _Icon = require('@material-ui/core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _styles = require('@material-ui/core/styles');

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var _EmailLink = require('./EmailLink');

var _EmailLink2 = _interopRequireDefault(_EmailLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
  return {
    footer: {
      backgroundColor: theme.palette.footer,
      color: '#fff',
      margin: 0,
      width: '100%',
      padding: 24
    }
  };
};

var linkStyles = function linkStyles() {
  return {
    iconClass: {
      marginRight: '10px'
    },
    linkContainer: {
      marginBottom: '8px'
    }
  };
};

var FooterLink = function FooterLink(_ref) {
  var label = _ref.label,
      url = _ref.url,
      classes = _ref.classes,
      iconClasses = _ref.iconClasses;
  return _react2.default.createElement(
    _Grid2.default,
    { item: true, xs: 12, className: classes.linkContainer },
    _react2.default.createElement(
      _Typography2.default,
      { color: 'inherit' },
      url.startsWith('mailto') ? _react2.default.createElement(_EmailLink2.default, { href: url, label: label, iconClasses: iconClasses }) : _react2.default.createElement(
        _Link2.default,
        { external: true, footer: true, to: url },
        iconClasses && _react2.default.createElement(_Icon2.default, { className: iconClasses + ' ' + classes.iconClass }),
        label
      )
    )
  );
};

FooterLink = (0, _styles.withStyles)(linkStyles)(FooterLink);

var FooterSectionHeading = function FooterSectionHeading(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    _Grid2.default,
    { item: true, xs: 12 },
    _react2.default.createElement(
      _Typography2.default,
      { variant: 'h6', color: 'inherit' },
      children
    )
  );
};

var socialLinkStyle = function socialLinkStyle() {
  return {
    iconsContainer: {
      maxWidth: '235px'
    },
    socialIcon: {
      fontSize: '30px',
      color: 'white'
    }
  };
};

var FooterSocial = function FooterSocial(_ref3) {
  var social = _ref3.social,
      classes = _ref3.classes;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      FooterSectionHeading,
      null,
      'Follow us'
    ),
    _react2.default.createElement(
      _Grid2.default,
      { className: classes.iconsContainer, container: true, justify: 'space-between' },
      social.map(function (_ref4, i) {
        var iconClasses = _ref4.iconClasses,
            url = _ref4.url;
        return _react2.default.createElement(
          _Grid2.default,
          { item: true, key: i },
          _react2.default.createElement(
            _Link2.default,
            { external: true, footer: true, to: url },
            _react2.default.createElement(_Icon2.default, { className: iconClasses + ' ' + classes.socialIcon })
          )
        );
      })
    )
  );
};

FooterSocial = (0, _styles.withStyles)(socialLinkStyle)(FooterSocial);

var FooterSection = function FooterSection(_ref5) {
  var heading = _ref5.heading,
      links = _ref5.links,
      social = _ref5.social;
  return _react2.default.createElement(
    _Grid2.default,
    {
      item: true,
      xs: 12,
      sm: 6,
      md: 3,
      container: true,
      direction: 'column',
      justify: 'space-between'
    },
    _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(
        FooterSectionHeading,
        null,
        heading
      ),
      links.map(function (link, i) {
        return _react2.default.createElement(FooterLink, {
          key: i,
          label: link.label,
          url: link.url,
          iconClasses: link.iconClasses
        });
      })
    ),
    social ? _react2.default.createElement(
      _Grid2.default,
      { item: true },
      _react2.default.createElement(FooterSocial, { social: social })
    ) : null
  );
};

var Footer = function Footer(_ref6) {
  var classes = _ref6.classes,
      externalLinks = _ref6.externalLinks;
  return _react2.default.createElement(
    _Grid2.default,
    { className: classes.footer, container: true, justify: 'center', spacing: 3 },
    _react2.default.createElement(
      _Grid2.default,
      { item: true, container: true, xs: 12, md: 10, spacing: 2 },
      _react2.default.createElement(FooterSection, { heading: 'About', links: externalLinks.about }),
      _react2.default.createElement(FooterSection, {
        heading: 'Help',
        links: externalLinks.help,
        social: externalLinks.social
      }),
      _react2.default.createElement(FooterSection, { heading: 'Partners', links: externalLinks.partners }),
      _react2.default.createElement(FooterSection, { heading: 'Open Targets', links: externalLinks.network })
    )
  );
};

exports.default = (0, _styles.withStyles)(styles)(Footer);