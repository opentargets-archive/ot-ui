import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// const styles = {
//   inline: {},
// };
const Text = ({ children }) => (
  <Typography component="span">{children}</Typography>
);

export default Text;
