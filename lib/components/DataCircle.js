import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  bold: {
    fill: theme.palette.grey[600],
  },
  blue: {
    fill: theme.palette.primary.main,
  },
  red: {
    fill: theme.palette.secondary.main,
  },
  default: {
    fill: theme.palette.grey[500],
  },
});

const DataCircle = ({ radius, colorScheme, classes }) => {
  const className = classes[colorScheme];
  return (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <circle cx={radius} cy={radius} r={radius} className={className} />
    </svg>
  );
};

export default withStyles(styles)(DataCircle);
