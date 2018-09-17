import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const CloseButton = props => (
  <IconButton {...props}>
    <CloseIcon />
  </IconButton>
);

export default CloseButton;
