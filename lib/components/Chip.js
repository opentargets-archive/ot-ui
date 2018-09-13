import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MuiChip from '@material-ui/core/Chip';

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  },
  gene: {
    backgroundColor: theme.palette.gene,
  },
  tagVariant: {
    backgroundColor: theme.palette.tagVariant,
  },
  indexVariant: {
    backgroundColor: theme.palette.indexVariant,
  },
  study: {
    backgroundColor: theme.palette.study,
  },
});

const Chip = ({ classes, type, label, onDelete }) => (
  <MuiChip
    className={classNames(classes.chip, classes[type])}
    label={label}
    onDelete={onDelete}
  />
);

export default withStyles(styles)(Chip);
