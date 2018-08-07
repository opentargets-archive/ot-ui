import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  examplebutton: {
    margin: 10,
    textTransform: 'none',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const SearchExamples = ({ classes, examples }) => {
  return (
    <div className={classes.row}>
      {examples.map(example => (
        <Button
          key={example.url}
          className={classes.examplebutton}
          variant="outlined"
          size="small"
          color="primary"
          component={Link}
          to={example.url}
        >
          {example.label}
        </Button>
      ))}
    </div>
  );
};

export default withStyles(styles)(SearchExamples);
