import React, { Component, Fragment } from 'react';
import {
  MenuItem,
  Popper,
  MenuList,
  IconButton,
  Fade,
  Paper,
  ClickAwayListener,
} from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';

import Link from './Link';

// const anchorOrigin = { vertical: 'bottom', horizontal: 'right' };
// const transformOrigin = { vertical: 'top', horizontal: 'right' };

// HeaderMenuProps = {
//   items: {
//     name: string;
//     url: string;
//     external: boolean;
//   }[];
// };

class HeaderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleMenuToggle = event => {
    const { anchorEl } = this.state;
    this.setState({
      anchorEl: anchorEl === null ? event.currentTarget : null,
    });
  };
  handleMenuOpen = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };
  handleMenuClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      this.setState({
        anchorEl: null,
      });
    }
  };

  render() {
    const { anchorEl } = this.state;
    const { items, placement } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <Fragment>
        <IconButton
          size="medium"
          color="inherit"
          aria-label="open header menu"
          aria-haspopup="true"
          onClick={this.handleMenuToggle}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Popper
          open={isMenuOpen}
          anchorEl={anchorEl}
          role={undefined}
          transition
          disablePortal
          placement={placement || 'bottom-start'}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={this.handleMenuClose}>
                  <MenuList
                    id="menu-list-grow"
                    onKeyDown={this.handleListKeyDown}
                  >
                    {items.map((item, i) => (
                      <MenuItem
                        onClick={this.handleMenuClose}
                        key={i}
                        dense={true}
                      >
                        <Link external={item.external} to={item.url}>
                          {item.name}
                        </Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
      </Fragment>
    );
  }
}

export default HeaderMenu;
