import React from 'react';
// import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  examplebutton: {
    margin: '1rem',
    textTransform: 'none',
  },
  row: {
    display: 'flex',
    marginTop: '1rem',
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
